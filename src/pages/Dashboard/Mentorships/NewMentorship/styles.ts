import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    > h1 {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3rem;
      letter-spacing: -0.5px;
      color: ${theme.colors.grey};
    }
  `};
`;

export const TabNavigation = styled.div`
  margin: 32px 0 0 0;
`;

export const TabNavigationHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px dashed rgba(53,60,72,0.3);
`;

export const TabNavigationHeaderItem = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    padding: 0 6px 16px 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: ${theme.colors.grey};
    opacity: 0.5;
    cursor: pointer;
    transition: ${theme.transition.default};

    display: flex;
    justify-content: center;
    
    &:not(:last-child) {
      margin: 0 24px 0 0;
    }

    ${active
    && css`
      opacity: 1;
      /* color: ${theme.colors.primary}; */
      position: relative;

      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.primary};

        position: absolute;
        bottom: 0;
      }
    `};
  `};
`;

export const TabNavigationContent = styled.div``;
