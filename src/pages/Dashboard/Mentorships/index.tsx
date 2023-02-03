import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiMessage2Line,
  RiEditLine,
  RiEyeLine,
  RiDeleteBinLine,
  RiInformationLine,
  RiSearchLine,
} from 'react-icons/ri';

import { mentorships } from '../../../mock';

import { currencyBRL } from '../../../utils';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
  ContentHeaderButtons,
  CustomersTable,
  CustomersTableHeader,
  CustomersTableHeaderItem,
  CustomersTableContent,
  CustomersTableContentRow,
  CustomersTableContentRowItem,
  Tag,
  EmptyBox,
  ContentHeaderSub,
  SearchInput,
} from './styles';

const Mentorships: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredMentorships, setFilteredMentorships] = useState([] as any);

  useEffect(() => {
    filterMentorships();
  }, [searchQuery]);

  function filterMentorships(): void {
    const filteredData = mentorships.filter((item: any) => (item.name ? item.name : '').toLowerCase().includes(searchQuery));

    setFilteredMentorships(filteredData);
  }

  return (
    <Container>
      <ContentHeader>
        <ContentHeaderTexts>
          <h2>Mentorias</h2>
          <ContentHeaderButtons>
            <Link to="/mentorias/criar">
              <button type="button">Criar mentoria</button>
            </Link>
          </ContentHeaderButtons>
        </ContentHeaderTexts>
        <ContentHeaderSub>
          <SearchInput>
            <RiSearchLine />
            <input
              type="text"
              placeholder="Procurar mentorias"
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
          </SearchInput>
        </ContentHeaderSub>
      </ContentHeader>

      <CustomersTable>
        <CustomersTableHeader>
          <CustomersTableHeaderItem>Nome da mentoria</CustomersTableHeaderItem>
          <CustomersTableHeaderItem>Pago</CustomersTableHeaderItem>
          <CustomersTableHeaderItem>Lançamento</CustomersTableHeaderItem>
          <CustomersTableHeaderItem>Ações</CustomersTableHeaderItem>
        </CustomersTableHeader>
        <CustomersTableContent>
          {filteredMentorships?.length ? (
            filteredMentorships?.map((mentorship: any) => (
              <CustomersTableContentRow key={mentorship?.id}>
                <CustomersTableContentRowItem>
                  {mentorship?.name}
                </CustomersTableContentRowItem>
                <CustomersTableContentRowItem>
                  <Tag>{currencyBRL.format(mentorship?.commission)}</Tag>
                </CustomersTableContentRowItem>
                <CustomersTableContentRowItem>
                  {new Intl.DateTimeFormat('pt-BR').format(mentorship?.releaseDate)}
                </CustomersTableContentRowItem>
                <CustomersTableContentRowItem>
                  <RiEditLine />
                  <RiEyeLine />
                  <RiDeleteBinLine />
                </CustomersTableContentRowItem>
              </CustomersTableContentRow>
            ))
          ) : (
            <EmptyBox>
              <RiInformationLine />
              <h3>Nenhuma mentoria com o filtro digitado.</h3>
            </EmptyBox>
          )}
        </CustomersTableContent>
      </CustomersTable>
    </Container>
  );
};

export default Mentorships;
