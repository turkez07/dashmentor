import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const TasksList = styled.div`
  ${({ theme }) => css`
    margin: 20px 0 0 0;
  `};
`;

export const TaskItem = styled.div<{ checked?: boolean }>`
  ${({ theme, checked }) => css`
    display: flex;
    align-items: center;

    border: 1px dashed rgba(53, 60, 72, 0.3);
    border-radius: 4px;
    padding: 18px 24px;

    :not(:last-child) {
      margin: 0 0 12px 0;
    }

    ${checked
    && css`
      border-color: ${theme.colors.primary};
    `}

    > svg {
      color: ${theme.colors.error};
      font-size: 1.2rem;
      margin-left: auto;
      cursor: pointer;
    }
  `};
`;

export const TaskItemTexts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin: 0 0 0 12px;
    font-size: 1.5rem;
    font-weight: 400;
    color: ${theme.colors.grey};

    > small {
      opacity: 0.3;
      margin: 4px 0 0 0;
      font-size: 1.1rem;
    }
  `};
`;
