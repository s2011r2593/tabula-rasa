import styled from 'styled-components'

const ItemWrapper = styled.div`
margin-bottom: 20px;
color: ${props => props.theme.fg};
padding: 10px;
padding-left: 20px;
position: relative;
cursor: pointer;
user-select: none;
opacity: 1;
transition: all .1s ease;

:hover {
  opacity: 0.5;
}
`;

export {
  ItemWrapper,
};
