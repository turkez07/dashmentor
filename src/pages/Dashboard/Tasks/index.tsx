import React from 'react';

import {
  Container,
  ContentHeaderTexts,
  ContentHeader,
} from './styles';

const Tasks: React.FC = () => (
  <Container>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Tasks</h2>
      </ContentHeaderTexts>
    </ContentHeader>
  </Container>
);

export default Tasks;
