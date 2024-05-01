import { FC, useEffect, useState } from "react";
import { IUniversity } from "./university.interface";
import CardUniversity from "../ItemCard";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import React from "react";

const LIMIT_UNIVERSITIES = 15;

const BlockOnserver = styled.div`
  height: 40px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
`;

const DynamicPaginationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
  color: #777;
`;

const DynamicPagination: FC = () => {
  const [universities, setUniversities] = useState<Array<IUniversity>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_UNIVERSITIES;
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`
      );
      setUniversities((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log('Error fetching universities:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && !loading) {
      setCurrentPage((prev: number) => prev + 1);
    }
  }, [inView, loading]);

  return (
    <DynamicPaginationContainer>
      <h1>List Universities</h1>
      {universities.map((university) => (
        <CardUniversity data={university} key={university.name}></CardUniversity>
      ))}
      {loading && <LoadingText>Loading...</LoadingText>}
      <BlockOnserver ref={ref}>Loading more...</BlockOnserver>
    </DynamicPaginationContainer>
  );
};

export default DynamicPagination;
