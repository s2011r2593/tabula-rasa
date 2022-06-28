import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Main(props) {
  const [dimsArray, setDimsArray] = useState([window.innerWidth, window.innerHeight]);
  const [dimsObj, setDimsObj] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [code, setCode] = useState('');

  // useEffect lets you listen to updates in your application.
  // it typically follows the format:
  // useEffect(() => {
  //   stuff that you want to run
  // }, [dependency array]);
  
  // the stuff that you want to run runs every time that anything
  // in the dependency array changes.
  // A useEffect with an empty dependency array will run once on load.
  useEffect(() => {
    const handleResize = () => {
      // Updating State Example
      /* !IMPORTANT! You need to use the state setting function to update state */

      // Example of Updating Array State //
      // Update single field (i.e. height)
      let newDims = dimsArray.slice();
      newDims.splice(1, 1, window.innerHeight);
      setDimsArray(newDims);
      // Overwrite Everything
      setDimsArray([window.innerWidth, window.innerHeight]);
      // Note, it would be ILLEGAL to update by doing something like:
      // dimsArray = [window.innerWidth, window.innerHeight];
      // YOU NEED TO USE THE STATE SETTER!!!

      // Object Example //
      // Update single field (i.e. width)
      setDimsObj(prevState => ({
        ...prevState,
        width: window.innerWidth,
      }));
      // Overwrite Everything
      setDimsObj({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Again, never do something like:
      // dimsObj = {
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // };
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Gets called when the input field changes.
  const handleInput = (e) => {
    // onEvent props in React pass an event as a parameter.
    // We set onChange={handleInput} so handleInput gets passed
    // the change event. To get the value of the input field,
    // we need to access event.target.value
    setCode(e.target.value);
  }

  // Example of listening to state updates.
  // There is no actual functionality in this case, were just logging state changes
  useEffect(() => {
    console.log('Current Screen Dimension State:');
    console.log(dimsArray);
  }, [dimsArray, dimsObj]);

  return (
    <MainWrapper theme={props.theme}>
      <FlexItem>
        The screen's dimensions are: {dimsArray[0]}x{dimsArray[1]}
        {
          // Could just as easily be:
          // The screen's dimensions are: {dimsObj.width}x{dimsObj.height}
        }
      </FlexItem>

      {/* You can use ternary operators for conditional rendering*/}
      {dimsArray[0] <= 800
        ? <FlexItem>Example of Conditional Rendering Based on Screen Width</FlexItem>
        : <FlexItem>Conditional Rendering Based on Screen Width</FlexItem>
      }

      {/*
        for tracking the value of an input you need to store value in state
        and set state on changes to the input field
      */}
      <StyledInput
        placeholder='Enter the code (abc123)'
        value={code}
        onChange={handleInput}
      />

      {/*
        You can also do a conditional render with the && operator
        Also, you can use access environmental variables in .env which
        is useful for storing things like api keys
        Note that your environmental variables need to be prefixed by REACT_APP_
      */}
      {code === process.env.REACT_APP_SECRET_CODE &&
        <HoverExample>
          I Only appear when the correct code is entered. See what happens when you hover over me.
        </HoverExample>
      }
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background: ${props => (props.theme === 1) ? '#073642' : '#eee8d5'};
  flex: 1;
  width: calc(100% - 128px);
  transition: background 0.1s ease-out;
  padding: 32px 64px;
  color: #859900;
  display: flex;
  flex-direction: column;
`;

const FlexItem = styled.div`
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  margin-bottom: 12px;
  width: 200px;
`;

// use styled(ExistingStyledComponent) to extend ExistingStyledComponent
const HoverExample  = styled(FlexItem)`
  cursor: pointer;

  // You can still use normal css stuff in styled components
  :hover {
    color: red;
    transition: color 0.5s;
  }

  // Stuff like ::before and ::after also work.
`;