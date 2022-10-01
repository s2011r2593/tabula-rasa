import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { ContextProvider } from './components/shared/Context';

import Modal from './components/shared/Modal';
import List from './components/main/List';

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <GlobalStyle />
          <Modal />
          <Title>
            &frasl; Todo &frasl;
          </Title>
          <List />
        </AppWrapper>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;

const theme = {
  bg: '#2c292d',
  fg: '#fdf9f3',
  accent: '#ff6188',
  1: '#fc9867',
  2: '#ffd866',
  3: '#a9dc76',
  4: '#78dce8',
  5: '#ab9df2',
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
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
  color: ${props => props.theme.accent};
`;
