import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
  flex: 1;
`;

export const ContentBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBlack};
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 2%) 0px 3px 10px 0px;
    padding: 40px;
    width: 100%;
    max-width: 580px;

    display: flex;
    flex-direction: column;
  `};
`;

export const ContentBoxTexts = styled.div`
  ${({ theme }) => css`
    margin: 30px 0;
    
    > h1 {
      color: ${theme.colors.white};
      margin: 0 0 8px 0;
      font-size: 2.4rem;
      line-height: 3rem;
      font-weight: 600;
    }

    > p {
      color: ${theme.colors.white};
      opacity: .5;
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 400;
    }
  `};
`;

export const Brand = styled.div`
  ${({ theme }) => css`
    width: 53px;
    height: 53px;
    border: 1px dashed ${theme.colors.white};
    border-radius: 17px;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

export const LeftContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > small {
      color: ${theme.colors.white};
      font-size: 1.2rem;
      line-height: 2.2rem;
      align-self: center;
      margin: 18px 0 0 0;
      opacity: 0.5;
    }

    > button {
      background-color: ${theme.colors.purple};
      border-radius: 4px;
      color: ${theme.colors.white};
      height: 60px;
      margin: 10px 0 0 0;

      transition: 0.5s ease-in;

      display: flex;
      align-items: center;

      > svg {
        margin: 0 0 0 6px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  `};
`;

export const InputControl = styled.div`
  ${({ theme }) => css`
    margin: 0 0 18px 0;
    
    display: flex;
    flex-direction: column;

    > small {
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 400;
      color: ${theme.colors.white};
      margin: 0 0 12px 0;
    }

    > input {
      padding: 19px 24px 19px 20px;
      border-radius: 4px;
      height: 60px;
      border: 0;
      background-color: ${theme.colors.background};
      border: 1px solid ${theme.colors.background};

      transition: 0.5s ease-in;

      &:focus {
        border: 1px solid ${theme.colors.purple};
      }
    }
  `};
`;

export const AccessBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${theme.colors.secondaryBlack};
    color: ${theme.colors.white};
    padding: 10px 50px;
    margin: 20px 0 0 0;
    border-radius: 5px;
    width: 100%;
    max-width: 580px;
    font-size: 1.1rem;
    line-height: 1.5rem;

    > span {
      margin: 0 8px 0 0;
    }
  `};  
`;
