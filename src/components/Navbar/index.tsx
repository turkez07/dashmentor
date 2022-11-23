import React, { useState } from 'react';
import {
  RiMenuFoldLine,
} from 'react-icons/ri';

import useAppTheme from '../../contexts/ThemeContext';
import ThemeSwitcher from '../ThemeSwitcher';

import {
  Container,
  ToggleButton,
} from './styles';

interface NavbarProps {
  toggled: boolean;
  toggleSidebar: () => void;
}

const Navbar = ({ toggled, toggleSidebar }: NavbarProps): any => {
  const { toggleTheme } = useAppTheme();

  return (
    <Container>
      <ToggleButton toggled={toggled} onClick={toggleSidebar}>
        <RiMenuFoldLine />
      </ToggleButton>
      <ThemeSwitcher />
    </Container>
  );
};

export default Navbar;
