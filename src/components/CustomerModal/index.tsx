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

import { currencyBRL } from '../../utils';

interface CustomerModalProps {
  modalType: 'new' | 'edit' | 'view';
  toggleModal: () => void;
  toggled: boolean;
  selectedCustomer: number | string;
}

const CustomerModal = ({
  toggleModal, modalType, toggled, selectedCustomer,
}: CustomerModalProps): any => {
  const [customerInformations, setCustomerInformations] = useState({} as any);

  const titleTexts = {
    new: 'Novo cliente',
    edit: 'Editar cliente',
    view: 'Cliente',
  };

  useEffect(() => {
    if (modalType !== 'new') {
      const resultItem = customers?.find((item) => item?.id === selectedCustomer);
      setCustomerInformations(resultItem);
      return;
    }
    setCustomerInformations({});
  }, [selectedCustomer, modalType]);

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
            <small>Nome do cliente</small>
            <input type="text" placeholder="João da Silva Aguiar" defaultValue={customerInformations?.name || ''} disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Preço</small>
            <input type="text" placeholder="R$ 150,00" disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Localização</small>
            <input type="text" placeholder="Porto Alegre, RS" defaultValue={customerInformations?.address?.city || ''} disabled={modalType === 'view'} />
          </InputControl>
          <InputControl>
            <small>Telefone</small>
            <input type="text" placeholder="(51) 991 10 5590" defaultValue={customerInformations?.phone || ''} disabled={modalType === 'view'} />
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

export default CustomerModal;
