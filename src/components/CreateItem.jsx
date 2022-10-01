import { useState } from 'react';
import styled from 'styled-components';

const CreateItem = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    if (value !== '') {
      props.submit(value);
    }
  }

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return(
    <div>
      <Field
        type='text'
        placeholder='Enter a new item'
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => checkEnter(e)}
      />
      <Submit
        valid={value !== ''}
        onClick={handleSubmit}
      >
        Submit
      </Submit>
    </div>
  );
}

export default CreateItem;

const Field = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 12px;
  border-radius: 20px;
  border: 1px solid #aaa;
`;

const Submit = styled.div`
  font-size: 12px;
  height: 30px;
  padding: 0 12px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid ${props => props.valid ? '#000' : '#aaa'};
  color: ${props => props.valid ? '#000' : '#777'};
  transition: all .2s ease;
`;
