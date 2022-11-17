import 'styled-components';

import { lightMode } from './themes';

export type Theme = typeof lightMode;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
