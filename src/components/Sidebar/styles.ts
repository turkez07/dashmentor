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

export const Container = styled.div<{ toggled?: boolean }>`
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
    box-shadow: ${theme.shadows.default};

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

      ${UserInformations} {
        > h3 {
          display: none;
        }
      }
    `};
  `};
`;

export const MenuItems = styled.div`
  ${({ theme }) => css`
    margin: 0 0 0 0;
    flex: 1;
    display: flex;
    flex-direction: column;

    > a.isActive {
      ${Item} {
        color: ${theme.colors.grey};
        background-color: ${`${theme.colors.primary}0C`};
      }
    }
  `};
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
