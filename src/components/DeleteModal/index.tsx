import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  Container,
  DeleteModalContent,
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
      <h3>Deseja realmente excluir esse cliente?</h3>
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
    </DeleteModalContent>
  </Container>
);

export default DeleteModal;
