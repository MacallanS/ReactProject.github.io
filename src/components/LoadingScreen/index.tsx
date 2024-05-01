import React from 'react';
import { Rings } from 'react-loader-spinner';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./logo.png');
  background-size: cover;
  background-position: center;
  z-index: 9999;
`;

const LoadingScreen: React.FC = () => {
  return (
    <LoadingContainer>
      <Rings color="#fff" height={80} width={80} />
    </LoadingContainer>
  );
};

export default LoadingScreen;
