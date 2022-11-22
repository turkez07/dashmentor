import styled, { css } from 'styled-components';

export const Content = styled.div``;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
  `};
`;

export const ToggleButton = styled.div<{ toggled?: boolean }>`
  ${({ theme, toggled }) => css`
    border-radius: 8px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: ${theme.colors.grey};
      font-size: 2rem;
      transition: 0.4s ease-out;
    }

    ${toggled
    && css`
      > svg {
        transform: rotate(-180deg);
      }
    `};
  `};
`;

export const ContentCharts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 24px 0 0 0;
`;

export const CalendarDropdDown = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: 400;
    transition: ${theme.transition.default};

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: ${theme.colors.white};
      font-size: 1.6rem;
    }

    &:hover {
      opacity: 0.8;
    }
  `};
`;

export const ContentHeaderTexts = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey};

    > h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3rem;
      letter-spacing: -0.5px;
      margin: 0 0 6px 0;
    }

    > small {
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 400;
      opacity: 0.5;

      > b {
        margin: 0 4px 0 0;
        font-weight: 600;
      }
    }
  `};
`;

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    display: flex;
    justify-content: space-between;
  `};
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 0 24px 0;
`;

export const ContentTable = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > small {
      color: ${theme.colors.white};
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin: 0 0 18px 0;
      opacity: 0.3;
    }
  `};
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;

  margin: 0 0 12px 0;
`;

export const TableItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${theme.colors.grey};
    margin: 0 0 18px 0;

    > span {
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-weight: 500;
      opacity: 0.5;
    }

    > h4 {
      font-size: 1.4rem;
      opacity: 0.8;
    }

    > svg {
      font-size: 2rem;
    }
  `};
`;

export const TableItemIcon = styled.div`
  ${({ theme }) => css`
    width: 52px;
    height: 52px;
    background-color: ${theme.colors.secondaryBackground};
    border-radius: 8px;
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

export const ChartBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    flex: 1;
    border-radius: 8px;
    padding: 48px 32px;
    height: 200px;
    width: 100%;
    position: relative;
    transition: all 300ms ease-out 0s;
    cursor: pointer;

    display: flex;
    align-items: flex-start;

    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 10px;
      border-top: 1px solid ${theme.colors.error};
      border-radius: 50%;
      left: 0;
      bottom: 25%;
    }

    &:hover {
      transform: translateY(-4px) translateZ(0);
    }
  `};
`;

export const ChartBoxHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    > small {
      color: ${theme.colors.grey};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.8rem;
      opacity: 0.7;
      margin: 0 0 12px 0;

      display: flex;
      justify-content: space-between;
    }

    > h4 {
      font-size: 1.8rem;
      line-height: 1.6rem;
      color: ${theme.colors.grey};
    }
  `};
`;
