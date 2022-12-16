import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .2);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteModalContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    box-shadow: 0px -4px 172px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
      font-size: 2rem;
      max-width: 325px;
      text-align: center;
      margin: 24px 0;
      color: ${theme.colors.grey};
    }

    button {
      border-radius: 4px;
      font-size: 1.2rem;
      line-height: 2.2rem;
      font-weight: 500;
      height: 46px;
      padding: 0 20px;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      transition: ${theme.transition.default};

      display: flex;
      align-items: center;
        
      &:last-child {
        background-color: transparent;
        color: ${theme.colors.grey};
      }

      &:hover {
        opacity: 0.8;
      }
    }
  `};
`;

export const RoundedIcon = styled.div`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: rgba(255, 182, 36, 0.2);
    color: ${theme.colors.primary};
    font-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;
