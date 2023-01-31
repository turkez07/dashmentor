import styled, { css } from 'styled-components';

export const Container = styled.div<{ toggled?: boolean }>`
  ${({ theme, toggled }) => css`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    max-width: 469px;
    width: 100%;
    transform: translateX(100%);

    background-color: ${theme.colors.secondaryBackground};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px 0px 0px 12px;

    box-shadow: 0px -4px 172px rgba(0, 0, 0, 0.08);

    transition: ${theme.transition.default};

    ${toggled
    && css`
      transform: translateX(0);
    `};
  `};
`;

export const CustomerModalHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 12px 0px 0px 0;
    padding: 32px 24px 0 24px;

    > h2 {
      font-size: 2.1rem;
      font-weight: 600;
      letter-spacing: -0.5px;
      line-height: 30px;
      color: ${theme.colors.grey};
    }

    > button {
      background-color: transparent;
      color: ${theme.colors.primary};
      font-size: 2.1rem;
    }
  `};
`;

export const CustomerModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  border-radius: 0 0px 0px 12px;
  padding: 32px 24px;
`;

export const CustomerModalForm = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;

    > button {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 4px;
      font-size: 1.3rem;
      line-height: 2.2rem;
      font-weight: 500;
      height: 46px;
      padding: 0 20px;
      margin: auto 0 0 auto;
      width: 100%;

      transition: ${theme.transition.default};

      &:hover {
        opacity: 0.8;
      }
    }
  `};  
`;

export const InputControl = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin: 0 0 20px 0;

    > small {
      color: ${theme.colors.grey};
      font-size: 1.3rem;
      line-height: 1.8rem;
      font-weight: 400;
      margin: 0 0 8px 0;
    }

    > input {
      border-radius: 4px;
      background-color: rgba(0,0,0,0.2);
      border: 0;
      height: 50px;
      padding: 12px 16px;
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: ${theme.colors.grey};
      border: 1px solid transparent;

      transition: border-color 0.5s ease-in;

      &:focus {
        border-color: ${theme.colors.primary};
      }

      &::placeholder {
        opacity: 0.8;
      }
    }
  `};
`;
