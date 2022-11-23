import React from 'react';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
} from './styles';

const Mentorships: React.FC = () => (
  <Container>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Mentorias</h2>
        <small>
          Financeiro, projetos e mentorias..
        </small>
      </ContentHeaderTexts>
    </ContentHeader>
  </Container>
);

export default Mentorships;