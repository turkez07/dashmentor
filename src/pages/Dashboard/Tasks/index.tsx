import React, { useState } from 'react';
import { RiSearchLine, RiDeleteBinLine } from 'react-icons/ri';

import Checkbox from '../../../components/Checkbox';
import TaskModal from '../../../components/TaskModal';

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
  PercentageContainer,
} from './styles';

const Tasks: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'new' | 'edit' | 'view'>('new');

  return (
    <Container>
      <ContentHeader>
        <ContentHeaderTexts>
          <h2>Suas tarefas de hoje!</h2>
          <ContentHeaderButtons>
            <button type="button" onClick={() => setVisibleModal(true)}>Criar tarefa</button>
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
              <RiDeleteBinLine />
            </TaskItem>
            <TaskItem checked>
              <Checkbox checked />
              <TaskItemTexts>
                Adicionar um membro a Rede de Apoio
                <small>Criada em 21/12/2022 às 20:01</small>
              </TaskItemTexts>
              <RiDeleteBinLine />
            </TaskItem>
            <TaskItem>
              <Checkbox />
              <TaskItemTexts>
                Adicionar um membro a Rede de Apoio
                <small>Criada em 21/12/2022 às 20:01</small>
              </TaskItemTexts>
              <RiDeleteBinLine />
            </TaskItem>
            <TaskItem>
              <Checkbox />
              <TaskItemTexts>
                Adicionar um membro a Rede de Apoio
                <small>Criada em 21/12/2022 às 20:01</small>
              </TaskItemTexts>
              <RiDeleteBinLine />
            </TaskItem>
          </TasksList>
        </LeftContent>
        <RightContent>
          <h3>Progresso das tarefas</h3>
          <PercentageContainer>
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
          </PercentageContainer>

        </RightContent>
      </Content>

      <TaskModal toggleModal={() => setVisibleModal(false)} modalType={modalType} toggled={visibleModal} />
    </Container>
  );
};

export default Tasks;
