import styled from 'styled-components';

const Sorter = (props) => {
  return(
    <span>
      Filter:
      <StyledSelect
        value={props.filter}
        onChange={(e) => {props.update(e.target.value)}}
      >
        <StyledOption value={-1}>All Tags</StyledOption>
        <StyledOption value={0}>White</StyledOption>
        <StyledOption value={1}>Orange</StyledOption>
        <StyledOption value={2}>Yellow</StyledOption>
        <StyledOption value={3}>Green</StyledOption>
        <StyledOption value={4}>Cyan</StyledOption>
        <StyledOption value={5}>Purple</StyledOption>
      </StyledSelect>
    </span>
  );
}

export default Sorter;

const StyledSelect = styled.select`
  font-family: 'Source Code Pro', monospace;
  margin-left: 10px;
  margin-bottom: 20px;
  background: transparent;
  color: ${props => props.theme.fg};
  border: 1px solid ${props => props.theme.fg};
  height: 30px;
  border-radius: 8px;
`;

const StyledOption = styled.option`
  background: ${props => props.theme.bg};
`;
