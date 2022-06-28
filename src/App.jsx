// Have your library imports at the top
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Separate library and component imports
// Note that you don't need to specify .jsx
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import Main from './components/Main/Main';

export default function App() {
  // useState defines a state variable and a state setting function in that order.
  // In this case, we have a state variable called theme that is set using setTheme.
  // The initial value is passed into useState so when the App component first gets
  // loaded, theme=0.
  const [theme, setTheme] = useState(0);

  return (
    <AppWrapper>
      {/* <TagName></TagName> is the same as <TagName /> */}
      <GlobalStyle />

      {/*
        You can pass props to components in order to share or send data.
        Note: the prop name is on the LHS, the prop value is on the RHS.
        As a styling rule, don't put spaces around the "=" for props.
      */}
      <HeaderBanner theme={theme} setTheme={(i) => setTheme(i)} />
      <Main theme={theme} />
    </AppWrapper>
  );
}

// CSS stuff that applies to the entire app
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #dc322f;
    font-size: 16px;
    font-weight: 600;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

// CSS stuff for the AppWrapper tag being used in this file (is local).
// You can create a styled component of any standard HTML tag (e.g. if
// you wanted to have an image, you could use styled.img).
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
