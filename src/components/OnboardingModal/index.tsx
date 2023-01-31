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

interface OnboardingModalProps {
  modalType: 'new' | 'edit' | 'view';
  toggleModal: () => void;
  toggled: boolean;
  selectedLevel: number | string;
}

const OnboardingModal = ({
  toggleModal, modalType, toggled, selectedLevel,
}: OnboardingModalProps): any => {
  const [customerInformations, setCustomerInformations] = useState({} as any);

  const titleTexts = {
    new: 'Novo conteúdo',
    edit: 'Editar conteúdo',
    view: 'Conteúdo',
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
            <small>Nome do conteúdo</small>
            <input type="text" placeholder="Ex: Nome do conteúdo" defaultValue={customerInformations?.name || ''} disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Descrição</small>
            <input
              type="text"
              placeholder="Ex: Descrição do conteúdo"
              disabled={modalType === 'view'}
            />
          </InputControl>
          <InputControl>
            <small>Link do vídeo</small>
            <input type="text" placeholder="Ex: https://www.youtube.com/watch?v=" defaultValue={customerInformations?.address?.city || ''} disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Link do PDF</small>
            <input type="text" placeholder="Ex: https://www.link-do-pdf.com" defaultValue={customerInformations?.address?.city || ''} disabled={modalType === 'view'} />
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

export default OnboardingModal;
