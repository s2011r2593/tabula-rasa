import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { Context } from './Context';

import Item from './Item';
import CreateItem from './CreateItem';

const List = () => {
  const context = useContext(Context);

  const [state, setState] = useState(JSON.parse(localStorage.getItem('items')) ?? {
    items: [],
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state));
  }, [state.items]);

  const removeItem = (i) => {
    let items = state.items.slice();
    items.splice(i, 1);
    setState({ items });
  }

  const addItem = (item) => {
    let items = state.items.slice();
    items.push(item);
    setState({ items });
    context.setModalOpen(false);
  }

  const openModal = () => {
    context.setModalContent(<CreateItem
      submit={(i) => addItem(i)}
    />);
    context.setModalOpen(true);
  }

  return(
    <ListWrapper>
      {
        state.items.map((e, i) => {
          return(
            <Item
              handleClick={() => removeItem(i)}
              strikeThrough={true}
              key={i}
            >
              {e}
            </Item>
          );
        })
      }
      <Item
        handleClick={openModal}
      >
        + add a todo
      </Item>
    </ListWrapper>
  );
}

export default List;

const ListWrapper = styled.div`
  width: calc(50% + 64px);
  flex: 1;
  overflow-y: auto;
`;
