import React, { useEffect, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  Container,
  CustomerModalHeader,
  CustomerModalContent,
  CustomerModalForm,
  InputControl,
} from './styles';

interface CustomerModalProps {
  modalType: 'new' | 'edit' | 'view';
  toggleModal: () => void;
  toggled: boolean;
}

const TaskModal = ({
  toggleModal, modalType, toggled,
}: CustomerModalProps): any => {
  const titleTexts = {
    new: 'Nova tarefa',
    edit: 'Editar tarefa',
    view: 'Tarefa',
  };

  return (
    <Container toggled={toggled}>
      <CustomerModalHeader>
        <h2>{titleTexts[modalType]}</h2>
        <button type="button" onClick={toggleModal}>
          <RiCloseLine />
        </button>
      </CustomerModalHeader>
      <CustomerModalContent>
        <CustomerModalForm>
          <InputControl>
            <small>Nome da Tarefa</small>
            <input type="text" placeholder="Ex: Realizar desafio da mentoria" disabled={modalType === 'view'} />
          </InputControl>
          {modalType !== 'view' && (
          <button type="button" onClick={toggleModal}>
            Salvar
          </button>
          )}
        </CustomerModalForm>
      </CustomerModalContent>
    </Container>
  );
};

export default TaskModal;
