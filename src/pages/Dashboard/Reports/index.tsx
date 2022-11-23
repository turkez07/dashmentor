import React from 'react';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
  ContentCharts,
  ChartBox,
  ChartBoxHeader,
} from './styles';

const Reports: React.FC = () => (
  <Container>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Relatórios</h2>
        <small>
          <b>Tipos de relatório:</b>
          Financeiro, projetos e mentorias..
        </small>
      </ContentHeaderTexts>
    </ContentHeader>

    <ContentCharts>
      <ChartBox>
        <ChartBoxHeader>
          <small>
            Entrada
            <span>+ 4,50%</span>
          </small>
          <h4>
            $33,587.96
          </h4>
        </ChartBoxHeader>
      </ChartBox>
      <ChartBox>
        <ChartBoxHeader>
          <small>
            Saída
            <span>+ 3,77%</span>
          </small>
          <h4>
            $3,289.05
          </h4>
        </ChartBoxHeader>
      </ChartBox>
      <ChartBox>
        <ChartBoxHeader>
          <small>
            Lucro
            <span>+ 10,25%</span>
          </small>
          <h4>
            $30,298.91
          </h4>
        </ChartBoxHeader>
      </ChartBox>
    </ContentCharts>
  </Container>
);

export default Reports;
