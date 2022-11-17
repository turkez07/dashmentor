import styled, { css } from 'styled-components';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

export const SunIcon = styled(RiSunLine)`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
    position: absolute;
    left: 4px;
  `};
`;

export const MoonIcon = styled(RiMoonLine)`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    position: absolute;
    right: 4px;
  `};
`;

export const Container = styled.button`
  ${({ theme }) => css`
    max-width: 50px;
    width: 100%;
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.colors.white};
    position: relative;
    height: 26px;
    margin: 0;
    border-radius: 20px;

    display: flex;
    align-items: center;
  `};
`;

export const Switcher = styled.span<{toggled?: boolean}>`
  ${({ theme, toggled }) => css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.colors.white};

    position: absolute;
    left: 4px;

    transition: all .4s;

    ${toggled
    && css`
      transform: translateX(22px);
    `}
  `};
`;
