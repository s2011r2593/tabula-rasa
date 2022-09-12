import { useState, useEffect } from 'react';

import { createGlobalStyle } from "styled-components";

import Form from "./components/Form";
import Name from './components/Name';

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://gist.githubusercontent.com/s2011r2593/8bdf22e5e529d64119c8f7c46c332494/raw/8ee0eabb9e4c5eaa79783be5afa3b37d4cf348e5/hfrcc.json')
      .then(res => res.json())
      .then(data => {setData(data); console.log(data)});
  }

  return (
    <div>
      <GlobalStyle />
      <Form handleSubmit={fetchData} />
      {
        data.map((e, i) => {
          return <Name color={e.color} key={i}>
            {e.name}
          </Name>
        })
      }
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 40px;
    font-family: sans-serif;
    font-size: 16px;
  }
`;
