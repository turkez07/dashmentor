import React from 'react';
import {
  RiMenuFoldLine,
} from 'react-icons/ri';

import ThemeSwitcher from '../../../components/ThemeSwitcher';

import {
  Container,
  ContentHeaderTexts,
  ToggleButton,
  ContentHeader,
  Navbar,
} from './styles';

const Projects: React.FC = () => (
  <Container>
    <Navbar>
      <ToggleButton>
        <RiMenuFoldLine />
      </ToggleButton>
      <ThemeSwitcher />
    </Navbar>
    <ContentHeader>
      <ContentHeaderTexts>
        <h2>Projetos</h2>
        <small>
          <b>Tipos de projeto:</b>
          Financeiro, projetos e mentorias..
        </small>
      </ContentHeaderTexts>
    </ContentHeader>
  </Container>
);

export default Projects;
