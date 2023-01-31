import React, { useState } from 'react';
import { RiEditLine, RiDeleteBin5Line } from 'react-icons/ri';

import {
  Container,
  AnticipationHeader,
  AnticipationContentList,
  AnticipationContentItem,
  AnticipationLeftContent,
  ActionButtons,
} from './styles';

const Anticipation: React.FC = () => (
  <Container>
    <AnticipationHeader>
      <small>Conteúdos de antecipação</small>
      <button type="button">Inserir conteúdo de antecipação</button>
    </AnticipationHeader>

    <AnticipationContentList>
      <AnticipationContentItem>
        <AnticipationLeftContent>
          <h4>Conteudo de antecipação #1</h4>
          <small>Descrição do conteúdo</small>
        </AnticipationLeftContent>
        <ActionButtons>
          <button type="button">
            <RiEditLine />
          </button>
          <button type="button">
            <RiDeleteBin5Line />
          </button>
        </ActionButtons>
      </AnticipationContentItem>
    </AnticipationContentList>
  </Container>
);

export default Anticipation;
