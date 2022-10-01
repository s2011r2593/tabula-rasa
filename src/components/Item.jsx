import { useEffect } from 'react';
import styled from 'styled-components';

const Item = (props) => {
  return (
    <ItemWrapper onClick={() => props.handleClick()}>
      {props.strikeThrough && <Strike />}
      {props.children}
    </ItemWrapper>
  );
}

export default Item;

const ItemWrapper = styled.div`
  margin-bottom: 20px;
  color: #000000ff;
  transition: color .1s ease;
  padding: 10px;
  position: relative;
  cursor: pointer;
  user-select: none;

  :hover {
    color: #00000055;
  }
`;

const Strike = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;

  :after {
    position: absolute;
    top: 50%;
    left: 0;
    content: ' ';
    width: 0%;
    height: 2px;
    background: black;
    transition: width .3s ease;
  }
  
  :hover:after {
    width: 100%;
  }
`;
