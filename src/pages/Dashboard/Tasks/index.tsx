import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

import Checkbox from '../../../components/Checkbox';

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
  TasksList,
  TaskItem,
  TaskItemTexts,
  RoundedPercentage,
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
        <TasksList>
          <TaskItem checked>
            <Checkbox checked />
            <TaskItemTexts>
              Realizar alguns desafios
              <small>Criada em 21/12/2022 às 20:09</small>
            </TaskItemTexts>
          </TaskItem>
          <TaskItem checked>
            <Checkbox checked />
            <TaskItemTexts>
              Adicionar um membro a Rede de Apoio
              <small>Criada em 21/12/2022 às 20:01</small>
            </TaskItemTexts>
          </TaskItem>
          <TaskItem>
            <Checkbox />
            <TaskItemTexts>
              Adicionar um membro a Rede de Apoio
              <small>Criada em 21/12/2022 às 20:01</small>
            </TaskItemTexts>
          </TaskItem>
          <TaskItem>
            <Checkbox />
            <TaskItemTexts>
              Adicionar um membro a Rede de Apoio
              <small>Criada em 21/12/2022 às 20:01</small>
            </TaskItemTexts>
          </TaskItem>
        </TasksList>
      </LeftContent>
      <RightContent>
        <h3>Seu progresso</h3>
        <RoundedPercentage>
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray="50, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="19" className="percentage">
              2
            </text>
            <text x="18" y="22.70" className="percentage_small">
              de 4
            </text>
          </svg>
        </RoundedPercentage>
      </RightContent>
    </Content>
  </Container>
);

export default Tasks;
