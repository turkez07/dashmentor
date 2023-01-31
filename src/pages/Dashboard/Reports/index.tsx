import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef } from '@nivo/core';

import {
  RiWalletLine,
  RiArrowRightSLine,
  RiUser4Line,
  RiTodoLine,
  RiEyeLine,
  RiEyeOffLine,
} from 'react-icons/ri';

import { generateStatements, generateInvestments, formatCurrency } from '../../../utils';

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
  DataWrapper,
  LeftData,
  LeftDataLine,
  ContentChart,
  ContentChartLine,
  ContentChartHeader,
  ContentChartHeaderLine,
  ContentRow,
  RightData,
  DataValue,
  CustomTooltip,
} from './styles';

const hiddenStatements = generateStatements(false);
const hiddenInvestments = generateInvestments(false)?.timeline;

const statements = generateStatements(true);
const investments = generateInvestments(true);

const Reports: React.FC = () => {
  const [hiddenValue, setHiddenValue] = useState<boolean>(false);

  const [displayStatement, setDisplayStatement] = useState<boolean>(true);
  const [displayInvestments, setDisplayInvestments] = useState<boolean>(true);

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
              <h4>{hiddenValue ? '••••' : '$95.031,48'}</h4>
            </ChartBoxTexts>
          </ChartBoxHeader>
          <button type="button" onClick={() => setHiddenValue((prev) => !prev)}>
            {hiddenValue ? <RiEyeLine /> : <RiEyeOffLine />}
          </button>
        </ChartBox>

        <ChartBox hidden={hiddenValue}>
          <ChartBoxHeader>
            <ChartBoxIcon>
              <RiUser4Line />
            </ChartBoxIcon>
            <ChartBoxTexts>
              <small>Clientes</small>
              <h4>{hiddenValue ? '••••' : '150'}</h4>
            </ChartBoxTexts>
          </ChartBoxHeader>
          <button type="button" onClick={() => setHiddenValue((prev) => !prev)}>
            {hiddenValue ? <RiEyeLine /> : <RiEyeOffLine />}
          </button>
        </ChartBox>

        <ChartBox hidden={hiddenValue}>
          <ChartBoxHeader>
            <ChartBoxIcon>
              <RiTodoLine />
            </ChartBoxIcon>
            <ChartBoxTexts>
              <small>Tarefas</small>
              <h4>{hiddenValue ? '••••' : '29'}</h4>
            </ChartBoxTexts>
          </ChartBoxHeader>
          <button type="button" onClick={() => setHiddenValue((prev) => !prev)}>
            {hiddenValue ? <RiEyeLine /> : <RiEyeOffLine />}
          </button>
        </ChartBox>
      </MainContentCharts>

      <ContentRow>
        <ContentChartLine>
          <ContentChartHeaderLine>
            <h4>Lucro</h4>
            <button
              type="button"
              onClick={() => setDisplayInvestments((prev) => !prev)}
            >
              {displayInvestments ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </ContentChartHeaderLine>
          <DataWrapper>
            <LeftDataLine>
              <ResponsiveLine
                data={
                  displayInvestments ? investments.timeline : hiddenInvestments
                }
                useMesh
                enableCrosshair={false}
                curve="cardinal"
                margin={{
                  top: 12,
                  right: 1,
                  bottom: 42,
                  left: 1,
                }}
                enableArea
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                lineWidth={2}
                pointSize={6}
                pointLabelYOffset={-4}
                colors="#FFB624"
                pointColor="#FFB624"
                pointLabel="y"
                enableGridY={false}
                enableGridX={false}
                enablePoints
                defs={[
                  linearGradientDef('gradientA', [
                    { offset: 0, color: 'inherit' },
                    { offset: 70, color: 'inherit', opacity: 0 },
                  ]),
                  linearGradientDef(
                    'gradientB',
                    [
                      { offset: 0, color: 'transparent' },
                      { offset: 70, color: 'inherit' },
                    ],
                    {
                      gradientTransform: 'rotate(90 0.5 0.5)',
                    },
                  ),
                  {
                    id: 'gradientC',
                    type: 'linearGradient',
                    colors: [
                      { offset: 0, color: '#FFB624' },
                      { offset: 70, color: 'transparent' },
                    ],
                  },
                ]}
                fill={[
                  { match: { id: 'react' }, id: 'gradientA' },
                  { match: '*', id: 'gradientC' },
                ]}
                tooltip={({ point }) => (
                  <CustomTooltip>{`${point.data.yFormatted}%`}</CustomTooltip>
                )}
              />
            </LeftDataLine>
          </DataWrapper>
        </ContentChartLine>

        <ContentChart>
          <ContentChartHeader>
            <h4>Extrato</h4>
            <button
              type="button"
              onClick={() => setDisplayStatement((prev) => !prev)}
            >
              {displayStatement ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </ContentChartHeader>
          <DataWrapper>
            <LeftData>
              <ResponsiveBar
                data={displayStatement ? statements : hiddenStatements}
                indexBy="month"
                keys={['outcome', 'income']}
                colors={({ id, data }: any) => data[`${id}Color`]}
                margin={{
                  top: 8,
                  right: -8,
                  bottom: 42,
                  left: -8,
                }}
                padding={0.88}
                borderRadius={2}
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 18,
                  tickRotation: 0,
                }}
                tooltip={(chart: any) => {
                  const value = chart.data[chart.id];
                  return <CustomTooltip>{`${formatCurrency(value)}`}</CustomTooltip>;
                }}
                theme={{
                  tooltip: {
                    container: {
                      background: 'transparent',
                      boxShadow: 'none',
                      padding: 0,
                      borderRadius: 0,
                    },
                    tableCell: {
                      padding: 0,
                    },
                  },
                }}
                animate
                enableGridY={false}
                enableLabel={false}
              />
            </LeftData>
            <RightData>
              <span>Receitas</span>
              <DataValue income>
                {displayStatement ? 'R$ 5.982,29' : '---'}
              </DataValue>
              <span>Despesas</span>
              <DataValue outcome>
                {displayStatement ? 'R$ 914,99' : '---'}
              </DataValue>
            </RightData>
          </DataWrapper>
        </ContentChart>

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
                <input type="checkbox" />
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
      </ContentRow>
    </Container>
  );
};

export default Reports;
