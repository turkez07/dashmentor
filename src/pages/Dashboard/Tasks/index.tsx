import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
  ContentHeaderButtons,
  SearchInput,
  ContentHeaderSub,
  Content,
  LeftContent,
  RightContent,
} from './styles';

const Tasks: React.FC = () => (
  <Container>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Suas tarefas hoje!</h2>
        <ContentHeaderButtons>
          <button type="button">Nova tarefa</button>
        </ContentHeaderButtons>
      </ContentHeaderTexts>
    </ContentHeader>
    <Content>
      <LeftContent>
        <ContentHeaderSub>
          <SearchInput>
            <RiSearchLine />
            <input type="text" placeholder="Procurar tarefas" />
          </SearchInput>
        </ContentHeaderSub>
      </LeftContent>
      <RightContent>
        <h2>Progress</h2>
      </RightContent>
    </Content>
  </Container>
);

export default Tasks;
