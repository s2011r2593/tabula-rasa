import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { ContextProvider } from './components/Context';

import Modal from './components/Modal';
import List from './components/List';

const App = () => {
  return (
    <ContextProvider>
      <AppWrapper>
        <GlobalStyle />
        <Modal />
        <Title>
          Example
        </Title>
        <List />
      </AppWrapper>
    </ContextProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
  }
`;

const AppWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 20px;
`;
