import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { ColumnsType } from 'antd/es/table';
import { Table, Button } from 'antd';
import styled from 'styled-components';

interface DataType {
  country: string;
  name: string;
  house: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Страна',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Название школы',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Название города',
    dataIndex: 'house',
    key: 'house',
  },
];

const StyledButton = styled(Button)`
  background: white;
`;

const WrapperDiv = styled.div`
  margin: 20px;
  border-radius: 20px;
`;

const TablePagination: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const getUniversity = async (page: number, limit: number) => {
    try {
      const offset = (page - 1) * limit;
      const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
      setDataSource(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUniversity(page, 10);
  }, [page]);

  return (
    <WrapperDiv>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <StyledButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        Назад
      </StyledButton>
      <StyledButton onClick={() => setPage(page + 1)}>Вперед</StyledButton>
    </WrapperDiv>
  );
};

export default TablePagination;
