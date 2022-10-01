import React from 'react';

const Context = React.createContext({
  modalOpen: false,
  modalContent: <></>,
  setModalOpen: () => {},
  setModalContent: () => {},
});
const { Provider } = Context;

class ContextProvider extends React.Component {
  state = {
    modalOpen: false,
    modalContent: <></>,
    setModalOpen: (modalOpen) => {
      this.setState({ modalOpen }, () => {
        if (!this.state.modalOpen) {
          this.state.setModalContent(<></>);
        }
      });
    },
    setModalContent: (modalContent) => {
      this.setState({ modalContent });
    }
  };

  render() {
    return <Provider value={{...this.state}}>{this.props.children}</Provider>
  }
}

export { Context, ContextProvider }
