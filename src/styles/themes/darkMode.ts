import lightMode from './lightMode';

const darkMode: typeof lightMode = {
  ...lightMode,
  colors: {
    ...lightMode.colors,
    grey: '#d4d6e0',
    background: '#191919',
    secondaryBackground: '#262626',
  },
};

export default darkMode;
