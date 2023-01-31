import React, { useEffect, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { customers } from '../../mock';

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
  selectedLevel: number | string;
}

const LevelsModal = ({
  toggleModal, modalType, toggled, selectedLevel,
}: CustomerModalProps): any => {
  const [customerInformations, setCustomerInformations] = useState({} as any);

  const titleTexts = {
    new: 'Novo nível',
    edit: 'Editar nível',
    view: 'Nível',
  };

  useEffect(() => {
    if (modalType !== 'new') {
      const resultItem = customers?.find((item) => item?.id === selectedLevel);
      setCustomerInformations(resultItem);
      return;
    }
    setCustomerInformations({});
  }, [selectedLevel, modalType]);

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
            <small>Nome do nível</small>
            <input type="text" placeholder="Ex: Gold Experience" defaultValue={customerInformations?.name || ''} disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Tipo de entrega da mentoria</small>
            <input
              type="text"
              placeholder="Ex: Mentoria individual"
              disabled={modalType === 'view'}
            />
          </InputControl>
          <InputControl>
            <small>Preço</small>
            <input type="text" placeholder="R$ 1.800,00" defaultValue={customerInformations?.address?.city || ''} disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Formato</small>
            <input type="text" placeholder="Prazo de entrega da Mentoria" defaultValue={customerInformations?.phone || ''} disabled={modalType === 'view'} />
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

export default LevelsModal;
