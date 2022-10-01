import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Swatch from './Swatch';

const CreateItem = (props) => {
  const [title, setTitle] = useState('');
  const [due, setDue] = useState(NaN);
  const [tag, setTag] = useState(0);

  const titleRef = useRef(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = () => {
    if (title !== '') {
      props.handleUpdate({
        title: title,
        due: due,
        color: tag,
      });
      props.handleClose();
    }
  }

  const checkKey = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    } else if (e.keyCode === 27) {
      props.handleClose();
    }
  }

  const handleDate = (e) => {
    setDue(Date.parse(e.target.value));
  }

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, [titleRef]);

  return(
    <div>
      <Label>
        Title:
      </Label>
      <Field
        type='text'
        placeholder='Enter a new item'
        value={title}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => checkKey(e)}
        ref={titleRef}
      />
      <Label>Due:</Label>
      <Field
        type='date'
        onChange={(e) => handleDate(e)}
        shrink
      />
      <Label>
        Tag:
      </Label>
      <Swatch
        selected={tag}
        select={(i) => {setTag(i)}}
      />
      <Submit
        valid={title !== ''}
        onClick={handleSubmit}
      >
        Submit
      </Submit>
    </div>
  );
}

export default CreateItem;

const Label = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
  margin-left: 10px;
`;

const Field = styled.input`
  font-family: 'Source Code Pro', monospace;
  width: ${props => props.shrink ? 'fit-content' : '300px'};
  height: 40px;
  padding: 0 16px;
  border-radius: 20px;
  border: none;
  :focus {
    outline: none;
  }
  margin-bottom: 20px;
`;

const Submit = styled.div`
  font-size: 12px;
  height: 30px;
  padding: 0 12px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 12px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.fg};
  color: ${props => props.theme.fg};
  opacity: ${props => props.valid ? 1 : 0.5};
  transition: all .2s ease;
`;
