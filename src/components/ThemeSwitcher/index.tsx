import React, { useState } from 'react';
import useAppTheme from '../../contexts/ThemeContext';
import {
  Container, Switcher, MoonIcon, SunIcon,
} from './styles';

const ThemeSwitcher = ():any => {
  const { toggleTheme } = useAppTheme();
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <Container
      type="button"
      onClick={() => {
        toggleTheme();
        setToggled(!toggled);
      }}
    >
      <SunIcon />
      <MoonIcon />
      <Switcher toggled={toggled} />
    </Container>
  );
};

export default ThemeSwitcher;
