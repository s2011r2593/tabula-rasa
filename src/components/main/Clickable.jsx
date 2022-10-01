import { ItemWrapper } from '../shared/Templates';

const Clickable = (props) => {
  return (
    <ItemWrapper onClick={() => props.handleClick()}>
      {props.children}
    </ItemWrapper>
  );
}

export default Clickable;
