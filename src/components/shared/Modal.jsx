import { useContext } from 'react';
import styled from 'styled-components'

import { Context } from './Context';

import Close from '../../assets/fi_x.svg';

const Modal = () => {
  const context = useContext(Context);

  const closeModal = () => {
    context.setModalOpen(false);
  }

  return (
    <ModalWrapper
      visible={context.modalOpen}
      onClick={closeModal}
    >
      <ModalContent onClick={e => e.stopPropagation()}>
        <Exit
          onClick={closeModal}
          src={Close}
        />
        {context.modalContent}
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000044;
  z-index: 1;
  cursor: pointer;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

const ModalContent = styled.div`
  position: relative;
  padding: 40px;
  border-radius: 20px;
  background: ${props => props.theme.bg};
  cursor: default;
`;

const Exit = styled.img`
  position: absolute;
  top: 13px;
  right: 16px;
  cursor: pointer;
  filter: invert(59%) sepia(17%) saturate(6260%) hue-rotate(309deg) brightness(99%) contrast(104%);
`;
