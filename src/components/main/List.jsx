import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../shared/Context';

import Sorter from './Sorter';
import Item from './Item';
import Clickable from './Clickable';
import CreateItem from './Create/CreateItem';

/*
  items: Item[];
  Item = {
    title: string,
    color: number (0~6),
    due: unixtimestamp,
  }
*/

const List = () => {
  const context = useContext(Context);

  const [state, setState] = useState(JSON.parse(localStorage.getItem('items')) ?? {
    items: [],
  });
  const [filter, setFilter] = useState(
    localStorage.getItem('filter')
    ? parseInt(localStorage.getItem('filter'))
    : -1
  );

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  const removeItem = (i) => {
    let items = state.items.slice();
    items.splice(i, 1);
    setState({ items });
  }

  const addItem = (item) => {
    let items = state.items.slice();
    items.push(item);

    items.sort((a, b) => {
      return a.due > b.due
    });

    setState({ items });
  }

  const openModal = () => {
    context.setModalContent(<CreateItem
      handleUpdate={(i) => addItem(i)}
      handleClose={() => {context.setModalOpen(false)}}
    />);
    context.setModalOpen(true);
  }

  return(
    <ListWrapper>
      <Sorter
        filter={filter}
        update={(i) => {setFilter(i)}}
      />
      {
        state.items.map((e, i) => {
          if (filter === -1 || filter === e.color) {
            return(
              <Item
                handleClick={() => removeItem(i)}
                data={e}
                key={i}
              />
            );
          } else {
            return(null);
          }
        })
      }
      <Clickable handleClick={openModal}>
        + add a todo
      </Clickable>
    </ListWrapper>
  );
}

export default List;

const ListWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;

  @media screen and (min-width: 900px) {
    width: calc(50% + 64px);
  }
`;
