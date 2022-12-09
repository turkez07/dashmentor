import React, { useState } from 'react';
import {
  RiSearchLine, RiAlignJustify, RiFunctionLine, RiMessage2Line,
} from 'react-icons/ri';

import { customers } from '../../../mock';

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
} from './styles';

const Customers: React.FC = () => {
  const [viewMode, setViewMode] = useState<string>('block');
  return (
    <Container>
      <ContentHeader>
        <ContentHeaderTexts>
          <h2>Employees</h2>
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
            <button type="button">New employee</button>
          </ContentHeaderButtons>
        </ContentHeaderTexts>
        <ContentHeaderSub>
          <SearchInput>
            <RiSearchLine />
            <input type="text" placeholder="Search employees" />
          </SearchInput>
        </ContentHeaderSub>
      </ContentHeader>

      {viewMode === 'list' ? (
        <CustomersTable>
          <CustomersTableHeader>
            <CustomersTableHeaderItem>Avatar</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Name</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Status</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Location</CustomersTableHeaderItem>
            <CustomersTableHeaderItem>Actions</CustomersTableHeaderItem>
          </CustomersTableHeader>
          <CustomersTableContent>
            {customers?.map((customer) => (
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
                  {customer?.status}
                </CustomersTableContentRowItem>
                <CustomersTableContentRowItem>
                  {customer?.address?.city}
                </CustomersTableContentRowItem>
                <CustomersTableContentRowItem>
                  <RiMessage2Line />
                  Send message
                </CustomersTableContentRowItem>
              </CustomersTableContentRow>
            ))}
          </CustomersTableContent>
        </CustomersTable>
      ) : (
        <CustomerBlocks>
          {customers?.map((customer) => (
            <CustomerBlockItem key={customer?.id}>
              <CustomerBlockItemHeader>
                <CustomerBlockImage src={customer?.thumbnailUrl} />
                <CustomerBlockItemHeaderTexts>
                  <h4>{customer?.name}</h4>
                  <small>{customer?.status}</small>
                </CustomerBlockItemHeaderTexts>
              </CustomerBlockItemHeader>
              <CustomerBlockItemContent>
                <span>{customer?.address?.city}</span>
              </CustomerBlockItemContent>
              <CustomerBlockItemFooter>
                <RiMessage2Line />
                Send message
              </CustomerBlockItemFooter>
            </CustomerBlockItem>
          ))}
        </CustomerBlocks>
      )}
    </Container>
  );
};

export default Customers;
