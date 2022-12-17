import React, { useState } from 'react';
import {
  RiWalletLine, RiArrowRightSLine, RiUser4Line, RiTodoLine, RiEyeLine,
} from 'react-icons/ri';

import {
  Container,
  MainContentCharts,
  ChartBox,
  ChartBoxHeader,
  ChartBoxIcon,
  ChartBoxTexts,
  HideBlock,
  TasksContainer,
  TasksHeader,
  TasksContent,
  RoundedPercentage,
  Checklist,
  Item,
  ProgressBar,
  Steps,
  Step,
} from './styles';

const Reports: React.FC = () => {
  const [hiddenValue, setHiddenValue] = useState<boolean>(false);

  return (
    <Container>
      <MainContentCharts>
        <ChartBox hidden={hiddenValue}>
          <ChartBoxHeader>
            <ChartBoxIcon>
              <RiWalletLine />
            </ChartBoxIcon>
            <ChartBoxTexts>
              <small>Vendas</small>
              <h4>
                <HideBlock />
                $95.031,48
              </h4>
            </ChartBoxTexts>
          </ChartBoxHeader>
          <RiEyeLine onClick={() => setHiddenValue((prev) => !prev)} />
        </ChartBox>

        <ChartBox hidden={hiddenValue}>
          <ChartBoxHeader>
            <ChartBoxIcon>
              <RiUser4Line />
            </ChartBoxIcon>
            <ChartBoxTexts>
              <small>Clientes</small>
              <h4>
                <HideBlock />
                150
              </h4>
            </ChartBoxTexts>
          </ChartBoxHeader>
          <RiEyeLine onClick={() => setHiddenValue((prev) => !prev)} />
        </ChartBox>

        <ChartBox hidden={hiddenValue}>
          <ChartBoxHeader>
            <ChartBoxIcon>
              <RiTodoLine />
            </ChartBoxIcon>
            <ChartBoxTexts>
              <small>Tarefas</small>
              <h4>
                <HideBlock />
                29
              </h4>
            </ChartBoxTexts>
          </ChartBoxHeader>
          <RiEyeLine onClick={() => setHiddenValue((prev) => !prev)} />
        </ChartBox>
      </MainContentCharts>

      <TasksContainer>
        <TasksHeader>
          <h4>Complete seu perfil</h4>
        </TasksHeader>

        <TasksContent>
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
              <text x="19" y="20" className="percentage">
                50%
              </text>
            </svg>
          </RoundedPercentage>

          <Checklist>
            <Item checked>
              <input type="checkbox" defaultChecked />
              <label>Troque seu avatar</label>
            </Item>
            <Item checked>
              <input type="checkbox" defaultChecked />
              <label>Preencha seu perfil</label>
            </Item>
            <Item>
              <input type="checkbox" />
              <label>Preencha sua agenda</label>
            </Item>
            <Item>
              <input type="checkbox" />
              <label>Preencha seus dados de faturamento</label>
            </Item>
          </Checklist>
        </TasksContent>

        <ProgressBar>
          <span>
            <b>2/4</b>
            {' '}
            Etapas
          </span>

          <Steps>
            <Step filled />
            <Step filled />
            <Step />
            <Step />
          </Steps>

          <small>50%</small>
        </ProgressBar>
      </TasksContainer>
    </Container>
  );
};

export default Reports;
