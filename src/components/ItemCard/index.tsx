import { FC } from "react";
import { IUniversity } from "../DinamicPagination/university.interface";
import styled from "styled-components";
import React from "react";

const CardStyled = styled.div`
  height: 100px;
  padding: 15px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <h3>{data.name}</h3>
    <p>{data.country}</p>
  </CardStyled>
);

export default CardUniversity;
