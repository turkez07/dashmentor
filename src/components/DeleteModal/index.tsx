import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  Container,
  DeleteModalContent,
  DeleteModalButtons,
  RoundedIcon,
} from './styles';

interface DeleteModalProps {
  handleToggleModal: () => void;
  handleDeleteConfirmation: () => void;
}

const DeleteModal = ({ handleToggleModal, handleDeleteConfirmation }: DeleteModalProps): any => (
  <Container>
    <DeleteModalContent>
      <RoundedIcon>
        <RiCloseLine />
      </RoundedIcon>
      <h3>
        Deseja realmente
        {' '}
        <br />
        {' '}
        excluir esse item?
      </h3>
      <DeleteModalButtons>
        <button
          type="button"
          onClick={handleDeleteConfirmation}
        >
          Excluir
        </button>
        <button
          type="button"
          onClick={handleToggleModal}
        >
          Fechar
        </button>
      </DeleteModalButtons>
    </DeleteModalContent>
  </Container>
);

export default DeleteModal;
