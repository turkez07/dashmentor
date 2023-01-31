import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const AnticipationHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 32px 0 18px 0;

    > small {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: ${theme.colors.grey};
    }

    > button {
      border-radius: 4px;
      height: 42px;
      padding: 10px 20px;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      transition: ${theme.transition.default};

      &:hover {
        opacity: 0.8;
      }
    }
  `};
`;

export const AnticipationContentList = styled.div``;

export const AnticipationContentItem = styled.div`
  ${({ theme }) => css`
    border-radius: 6px;
    padding: 18px;
    border: 0.5px solid rgba(53,60,72,0.3);

    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`;

export const AnticipationLeftContent = styled.div`
  ${({ theme }) => css`
    > h4 {
      color: ${theme.colors.grey};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.2rem;
    }

    > small {
      color: ${theme.colors.grey};
      opacity: 0.5;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6rem;
    }
  `};
`;

export const ActionButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 6px;

    > button {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      background-color: transparent;
      color: ${theme.colors.grey};
      border: 1px solid ${theme.colors.grey};

      transition: ${theme.transition.default};

      > svg {
        font-size: 1.2rem;
      }

      &:hover {
        opacity: 0.8;
      }

      &:last-child {
        background-color: ${theme.colors.error};
        color: ${theme.colors.white};
        border-color: ${theme.colors.error};
      }
    }
  `};
`;
