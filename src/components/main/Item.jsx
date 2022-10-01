import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ItemWrapper } from '../shared/Templates';

const Item = (props) => {
  const [due, setDue] = useState('')

  useEffect(() => {
    if (props.data.due) {
      let d = new Date(props.data.due);
      let dString = (d.getMonth() + 1).toString().padStart(2, '0') + '-';
      dString += (d.getDate() + 1).toString().padStart(2, '0') + '-';
      dString += d.getFullYear().toString().substring(2, 4);
      setDue(dString);
    }
  }, [props]);

  return (
    <ItemWrapper onClick={() => props.handleClick()}>
      <Strike />
      <StyledDiv color={props.data.color}>
        <div>
          {props.data.title}
        </div>
        <div>
          {due}
        </div>
      </StyledDiv>
    </ItemWrapper>
  );
}

export default Item;

const Strike = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: calc(100% - 15px);
  height: 40px;

  :after {
    position: absolute;
    top: 50%;
    left: 0;
    content: ' ';
    width: 0%;
    height: 2px;
    background: ${props => props.theme.fg};
    transition: width .3s ease;
  }
  
  :hover:after {
    width: calc(100% - 5px);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px dotted #fdf9f311;

  :before {
    position: absolute;
    top: calc(50% - 2px);
    left: 0px;
    content: '';
    background-color: ${props => props.theme[props.color] ?? props.theme.fg};
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }
`;
