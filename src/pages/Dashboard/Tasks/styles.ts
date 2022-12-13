import styled, { css } from 'styled-components';

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;

    > h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3rem;
      letter-spacing: -0.5px;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 46px;
  `};
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 0 24px 0;
`;

export const ContentHeaderButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > button {
      background-color: ${theme.colors.primary};
      border-radius: 4px;
      color: ${theme.colors.white};
      font-size: 1.3rem;
      line-height: 2.2rem;
      font-weight: 500;
      height: 46px;
      padding: 0 20px;
      transition: ${theme.transition.default};

      &:hover {
        opacity: 0.8;
      }
    }
  `};
`;

export const SearchInput = styled.div`
  ${({ theme }) => css`
    position: relative;
    flex: 1;

    display: flex;
    align-items: center;

    > input {
      width: 100%;
      height: 55px;
      border-radius: 4px;
      border: 0;
      background-color: ${theme.colors.secondaryBackground};
      color: ${theme.colors.grey};
      border: 1px solid transparent;
      padding: 19px 24px 19px 44px;
      font-size: 1.5rem;

      transition: border-color 0.5s ease-in;

      &:focus {
        border-color: ${theme.colors.primary};
      }
    }
  
    > svg {
      position: absolute;
      left: 18px;
      font-size: 1.6rem;
      color: ${theme.colors.grey};
    }
  `};
`;

export const ContentHeaderSub = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `};
`;

export const Content = styled.div`
  margin: 20px 0 0 0;
  display: flex;
`;

export const LeftContent = styled.div`
  width: 60%;
`;

export const RightContent = styled.div`
  flex: 1;
`;
