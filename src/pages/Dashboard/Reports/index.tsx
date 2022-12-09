import React from 'react';
import { RiArrowRightUpLine, RiArrowRightDownLine } from 'react-icons/ri';

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
      </ContentHeaderTexts>
    </ContentHeader>

    <ContentCharts>
      <ChartBox chartType="positive">
        <ChartBoxHeader>
          <small>
            Entrada
            <span>
              <RiArrowRightUpLine />
              4,50%
            </span>
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
            <span>
              <RiArrowRightDownLine />
              3,77%
            </span>
          </small>
          <h4>
            $3,289.05
          </h4>
        </ChartBoxHeader>
      </ChartBox>
      <ChartBox chartType="positive">
        <ChartBoxHeader>
          <small>
            Lucro
            <span>
              <RiArrowRightUpLine />
              10,25%
            </span>
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
