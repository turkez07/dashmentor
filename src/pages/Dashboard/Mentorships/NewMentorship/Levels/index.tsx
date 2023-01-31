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

const Levels: React.FC = () => (
  <Container>
    <AnticipationHeader>
      <small>
        Sua proximidade com o seu mentorado.
      </small>
      <button type="button">Criar novo nível de acesso</button>
    </AnticipationHeader>

    <AnticipationContentList>
      <AnticipationContentItem>
        <AnticipationLeftContent>
          <h4>Nível #1</h4>
          <small>Descrição do nível</small>
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
      <AnticipationContentItem>
        <AnticipationLeftContent>
          <h4>Nível #2</h4>
          <small>Descrição do nível</small>
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

export default Levels;
