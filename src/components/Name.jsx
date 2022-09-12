import styled from "styled-components";

export default function Name(props) {
  return (
    <StyledDiv color={props.color}>
      {props.children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-top: 10px;
  color: black;
  width: fit-content;
  :hover {
    color: ${props => props.color};
  }
`;