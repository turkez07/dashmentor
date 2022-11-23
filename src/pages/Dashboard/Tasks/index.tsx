import React from 'react';

import Checkbox from '../../../components/Checkbox';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
  SearchInput,
  ToDoList,
  ToDoListList,
  ToDoListItem,
} from './styles';

const Tasks: React.FC = () => (
  <Container>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Tarefas</h2>
        <small>
          Movimente suas tarefas diárias para se organizar melhor.
        </small>
      </ContentHeaderTexts>
    </ContentHeader>

    <ToDoList>
      <SearchInput>
        <input type="text" placeholder="Digite o que deseja adicionar" />
        {/* <button type="button">Adicionar</button> */}
      </SearchInput>
      <ToDoListList>
        <ToDoListItem>
          <Checkbox />
          <span>
            Criar anúncio para a mentoria assistida.
          </span>
        </ToDoListItem>
        <ToDoListItem>
          <Checkbox />
          <span>
            Criar página de captura para a mentoria
          </span>
        </ToDoListItem>
        <ToDoListItem>
          <Checkbox />
          <span>
            Criar página de vendas para a mentoria
          </span>
        </ToDoListItem>
      </ToDoListList>
    </ToDoList>
  </Container>
);

export default Tasks;
