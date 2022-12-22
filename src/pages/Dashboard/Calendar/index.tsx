import React from 'react';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
} from './styles';

const Calendar: React.FC = () => (
  <Container>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Agenda</h2>
      </ContentHeaderTexts>
    </ContentHeader>
  </Container>
);

export default Calendar;
