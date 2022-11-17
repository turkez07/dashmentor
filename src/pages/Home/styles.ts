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
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundBlack};
    padding: 46px 36px;
    flex: 1;

    display: flex;
    flex-direction: column;

    transition: 0.5s ease-out;
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundBlack};
    flex: 1;

    display: flex;
  `};
`;

export const Sidebar = styled.div<{ toggled?: boolean }>`
  ${({ theme, toggled }) => css`
    background-color: ${theme.colors.secondaryBlack};
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
          animation: ${opacityAnimation} 1s ease-in-out;
        }

        > svg {
          margin-right: 0;
          font-size: 1.6rem;
        }
      }

      ${Tag} {
        display: none;
        opacity: 0;
      }

      ${SidebarBrand} {
        width: 42px;
        height: 42px;
        margin: 0 auto;
      }
    `};
  `};
`;

export const SidebarBrand = styled.div`
  ${({ theme }) => css`
    width: 53px;
    height: 53px;
    border-radius: 10px;
    /* background-color: ${theme.colors.white}; */
    font-size: 1.6rem;
    border: 1px dashed ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s ease-out;
  `};
`;

export const MenuItems = styled.div`
  margin: 60px 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div<{ active?: boolean }>`
  ${({ active }) => css`
    margin: 0 0 12px 0;
    border-radius: 4px;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding: 12px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.3);
    position: relative;

    display: flex;
    align-items: center;

    transition: 0.4s ease-out;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    ${active
    && css`
      color: rgba(255, 255, 255, 1);
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
    background-color: ${theme.colors.purple};
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
    animation: ${opacityAnimation} 1s ease-in-out;
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
      color: ${theme.colors.white};
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
  flex: 1;
`;

export const CalendarDropdDown = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.secondaryBlack};
    border-radius: 8px;
    height: 60px;
    padding: 18px;
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: 400;

    display: flex;
    align-items: center;

    > svg {
      margin: 0 0 0 10px;
      color: ${theme.colors.purple};
      font-size: 1.6rem;
    }
  `};
`;

export const ContentHeaderTexts = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    > h2 {
      font-weight: 600;
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
      }
    }
  `};
`;

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
  `};
`;

export const Navbar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin: 0 0 24px 0;

    > h3 {
      color: ${theme.colors.white};
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-left: auto;
    }
  `};
`;

export const UserImage = styled.img`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;
    border: 1px dashed ${theme.colors.white};
    border-radius: 50%;
    padding: 10px;
    margin: 0 0 0 18px;
  `};
`;

export const ContentTable = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > small {
      color: ${theme.colors.white};
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin: 0 0 18px 0;
      opacity: 0.3;
    }
  `};
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
`;

export const TableItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${theme.colors.white};
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
    background-color: ${theme.colors.secondaryBlack};
    border-radius: 8px;
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

export const Price = styled.div<{ status?: string }>`
  ${({ status }) => css`
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 600;
    color: #E24A4A;

    ${status === 'revenue'
    && css`
      color: green;
    `};
  `};
`;
