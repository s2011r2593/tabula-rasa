import { useState, useEffect } from 'react';
import styled from "styled-components";

export default function Form(props) {
  const [fields, setFields] = useState({
    name: '',
    pass: '',
  });
  const [isValid, setIsValid] = useState({
    name: false,
    pass: false,
  });

  useEffect(() => {
    setIsValid({
      name: fields.name === 'sean',
      pass: fields.pass === '1234',
    });
  }, [fields]);

  const handleInput = (e, field) => {
    setFields(prevState => ({
      ...prevState,
      [field]: e.target.value,
    }));
  }

  const handleSubmit = () => {
    if (isValid.name && isValid.pass) {
      props.handleSubmit();
    }
  }

  return (
    <FormWrapper>
      <StyledInput
        type='text'
        placeholder='Enter your name'
        valid={isValid.name}
        onChange={(e) => handleInput(e, 'name')}
      />
      <StyledInput
        type='password'
        placeholder='Enter your password'
        valid={isValid.pass}
        onChange={(e) => handleInput(e, 'pass')}
      />
      <StyledButton
        onClick={handleSubmit}
      >
        Submit
      </StyledButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 128px;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  height: 32px;
  padding: 0 16px;
  border: 1px solid ${props => props.valid ? 'green' : 'red'};
  border-radius: 16px;
`;

const StyledButton = styled.div`
  background: #ebebeb;
  border-radius: 16px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;