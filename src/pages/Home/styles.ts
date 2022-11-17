import styled, { css, keyframes } from 'styled-components';

// Animation to sidebar when open/closes
const opacityAnimation = keyframes`
  0% { 
    display: none;
    opacity: 0;
  }
  100% {
    display: flex;
    opacity: 1;
  }
`;

export const Content = styled.div`
  padding: 46px 36px;
  flex: 1;

  display: flex;
  flex-direction: column;

  transition: 0.5s ease-out;
  animation: ${opacityAnimation} 1s ease-in-out;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;

    display: flex;
  `};
`;

export const Sidebar = styled.div<{ toggled?: boolean }>`
  ${({ theme, toggled }) => css`
    background-color: ${theme.colors.secondaryBackground};
    max-width: 280px;
    width: 100%;
    padding: 32px;
    margin: 32px 0 32px 32px;
    border-radius: 12px;
    position: relative;

    display: flex;
    flex-direction: column;

    transition: 0.5s ease-out;

    // Toggle animation when Sidebar is opened
    ${toggled
    && css`
      max-width: 93px;
      align-items: unset;
      padding: 32px 0;

      ${Item} {
        padding: 12px 0;
        justify-content: center;

        > span {
          display: none;
          white-space: nowrap;
          opacity: 0;
        }

        > svg {
          margin-right: 0;
          font-size: 1.6rem;
        }
      }

      ${Tag} {
        display: none;
      }

      ${SidebarBrand} {
        width: 42px;
        height: 42px;
        margin: 0 auto;
      }

      ${UserInformations} {
        > h3 {
          display: none;
        }
      }
    `};
  `};
`;

export const SidebarBrand = styled.div`
  ${({ theme }) => css`
    width: 53px;
    height: 53px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: 1px dashed ${theme.colors.grey};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s ease-out;
  `};
`;

export const MenuItems = styled.div`
  margin: 0 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div<{ active?: boolean }>`
  ${({ active, theme }) => css`
    margin: 0 0 12px 0;
    border-radius: 4px;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding: 12px;
    cursor: pointer;
    color: ${theme.colors.grey};
    position: relative;
    background-color: transparent;

    display: flex;
    align-items: center;

    transition: ${theme.transition.default};
    animation: ${opacityAnimation} 1s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    > span {
      animation: ${opacityAnimation} 1s ease-in-out;
    }

    ${active
    && css`
      color: ${theme.colors.grey};
      font-weight: 600;
      background-color: rgba(0, 0, 0, 0.1);
    `}

    > svg {
      margin: 0 12px 0 0;
      font-size: 1.8rem;
    }

    &:last-child {
      margin-top: auto;
    }
  `};
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: 1rem;
    line-height: 20px;

    display: inline-block;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 8px;
    font-weight: 600;
    margin: 0 0 0 6px;
    position: absolute;
    right: 10px;

    transition: 0.4s ease-out;
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

export const UserImage = styled.img`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;
    border: 1px dashed ${theme.colors.grey};
    border-radius: 50%;
    padding: 10px;
    margin: 0 18px;
  `};
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

export const UserInformations = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
    padding: 0 0 24px 0;
    margin: 0 auto 24px auto;
    width: 80%;
    text-align: center;

    animation: ${opacityAnimation} 1s ease-in-out;

    > h3 {
      color: ${theme.colors.grey};
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 400;
      margin: 18px 0 0 0;
      animation: ${opacityAnimation} 1s ease-in-out;
    }
  `};
`;
