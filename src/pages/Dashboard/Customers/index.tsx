import React, { useState, useEffect } from 'react';
import {
  RiSearchLine,
  RiAlignJustify,
  RiFunctionLine,
  RiMessage2Line,
  RiCloseLine,
  RiEditLine,
  RiEyeLine,
  RiDeleteBinLine,
  RiInformationLine,
} from 'react-icons/ri';

import { customers } from '../../../mock';

import { currencyBRL } from '../../../utils';

import DeleteModal from '../../../components/DeleteModal';
import CustomerModal from '../../../components/CustomerModal';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
  SearchInput,
  SearchBar,
  CustomersTable,
  CustomersTableHeader,
  CustomersTableHeaderItem,
  CustomersTableContent,
  CustomersTableContentRow,
  CustomersTableContentRowItem,
  CustomerRowImage,
  Divider,
  ContentHeaderButtons,
  ViewChanger,
  ContentHeaderSub,
  CustomerBlocks,
  CustomerBlockItem,
  CustomerBlockItemHeader,
  CustomerBlockImage,
  CustomerBlockItemContent,
  CustomerBlockItemFooter,
  CustomerBlockItemHeaderTexts,
  Tag,
  EmptyBox,
} from './styles';

const Customers: React.FC = () => {
  const [viewMode, setViewMode] = useState<string>('block');
  const [toggledModal, setToggledModal] = useState<boolean>(false);
  const [visibleConfirmationModal, setVisibleConfirmationModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'new' | 'edit' | 'view'>('new');
  const [filteredCustomers, setFilteredCustomers] = useState([] as any);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | string>(
    '',
  );

  useEffect(() => {
    filterCustomers();
  }, [searchQuery]);

  function filterCustomers(): void {
    const filteredData = customers.filter((item) => (item.name ? item.name : '').toLowerCase().includes(searchQuery));

    setFilteredCustomers(filteredData);
  }

  function handleDeleteCustomer(): void {
    const filteredCustomersList = filteredCustomers.filter((item: any) => item.id !== selectedCustomerId);
    setFilteredCustomers(filteredCustomersList);
  }

  return (
    <Container>
      <ContentHeader>
        <ContentHeaderTexts>
          <h2>Clientes</h2>
          <ContentHeaderButtons>
            <ViewChanger>
              <RiFunctionLine
                className={viewMode === 'block' ? 'active' : ''}
                onClick={() => setViewMode('block')}
              />
              <Divider />
              <RiAlignJustify
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              />
            </ViewChanger>
            <button
              type="button"
              onClick={() => {
                setModalType('new');
                setToggledModal(true);
              }}
            >
              Novo cliente
            </button>
          </ContentHeaderButtons>
        </ContentHeaderTexts>
        <ContentHeaderSub>
          <SearchInput>
            <RiSearchLine />
            <input
              type="text"
              placeholder="Procurar clientes"
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
          </SearchInput>
        </ContentHeaderSub>
      </ContentHeader>

      {viewMode === 'list' ? (
        <CustomersTable>
          <CustomersTableHeader>
            <CustomersTableHeaderItem>Avatar</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Nome</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Pago</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Localização</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Ações</CustomersTableHeaderItem>
          </CustomersTableHeader>
          <CustomersTableContent>
            {filteredCustomers?.length ? (
              filteredCustomers?.map((customer: any) => (
                <CustomersTableContentRow key={customer?.id}>
                  <CustomersTableContentRowItem>
                    <CustomerRowImage src={customer?.thumbnailUrl} />
                  </CustomersTableContentRowItem>
                  <CustomersTableContentRowItem>
                    {customer?.name}
                    {' '}
                    {customer?.lastName}
                  </CustomersTableContentRowItem>
                  <CustomersTableContentRowItem>
                    <Tag>{currencyBRL.format(customer?.commission)}</Tag>
                  </CustomersTableContentRowItem>
                  <CustomersTableContentRowItem>
                    {customer?.address?.city}
                  </CustomersTableContentRowItem>
                  <CustomersTableContentRowItem>
                    <RiMessage2Line />
                    <RiEditLine
                      onClick={() => {
                        setSelectedCustomerId(customer?.id);
                        setModalType('edit');
                        setToggledModal(true);
                      }}
                    />
                    <RiEyeLine
                      onClick={() => {
                        setSelectedCustomerId(customer?.id);
                        setModalType('view');
                        setToggledModal(true);
                      }}
                    />
                    <RiDeleteBinLine
                      onClick={() => {
                        setSelectedCustomerId(customer?.id);
                        setVisibleConfirmationModal(true);
                      }}
                    />
                  </CustomersTableContentRowItem>
                </CustomersTableContentRow>
              ))
            ) : (
              <EmptyBox>
                <RiInformationLine />
                <h3>Nenhum cliente com o filtro digitado.</h3>
              </EmptyBox>
            )}
          </CustomersTableContent>
        </CustomersTable>
      ) : (
        <CustomerBlocks>
          {filteredCustomers?.length ? (
            filteredCustomers?.map((customer: any) => (
              <CustomerBlockItem
                key={customer?.id}
                onClick={() => {
                  setSelectedCustomerId(customer?.id);
                  setModalType('view');
                  setToggledModal(true);
                }}
              >
                <CustomerBlockItemHeader>
                  <CustomerBlockImage src={customer?.thumbnailUrl} />
                  <CustomerBlockItemHeaderTexts>
                    <h4>{customer?.name}</h4>
                    <Tag>{currencyBRL.format(customer?.commission)}</Tag>
                  </CustomerBlockItemHeaderTexts>
                </CustomerBlockItemHeader>
                <CustomerBlockItemContent>
                  <span>{customer?.address?.city}</span>
                </CustomerBlockItemContent>
                <CustomerBlockItemFooter>
                  <RiMessage2Line />
                  Mandar mensagem
                </CustomerBlockItemFooter>
              </CustomerBlockItem>
            ))
          ) : (
            <EmptyBox>
              <RiInformationLine />
              <h3>Nenhum cliente com o filtro digitado.</h3>
            </EmptyBox>
          )}
        </CustomerBlocks>
      )}

      <CustomerModal
        toggled={toggledModal}
        toggleModal={() => setToggledModal(false)}
        modalType={modalType}
        selectedCustomer={selectedCustomerId}
      />

      {visibleConfirmationModal && (
        <DeleteModal
          handleDeleteConfirmation={() => {
            handleDeleteCustomer();
            setVisibleConfirmationModal(false);
          }}
          handleToggleModal={() => setVisibleConfirmationModal(false)}
        />
      )}
    </Container>
  );
};

export default Customers;
