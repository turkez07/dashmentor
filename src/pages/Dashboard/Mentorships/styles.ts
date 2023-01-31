import styled, { css } from 'styled-components';

export const Content = styled.div``;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
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
    width: 100%;
    margin: 0 0 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

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

export const ContentHeaderButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > a > button {
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

export const CustomersTable = styled.div`
  margin: 20px 0 0 0;

  display: flex;
  flex-direction: column;
`;

export const CustomersTableHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    border-radius: 4px;
    padding: 24px;

    display: flex;
    justify-content: space-between;
  `};
`;

export const CustomersTableHeaderItem = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${theme.colors.grey};
    opacity: 0.8;
    flex: 1;
    text-align: center;
  `};
`;

export const CustomersTableContent = styled.div``;

export const CustomersTableContentRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    transition: ${theme.transition.default};
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    
    &:not(:last-child) {
      border-bottom: 0.5px solid rgba(255, 255, 255, .05);
    }

    &:hover {
      background-color: rgba(255, 182, 36, .05);
      transition: ${theme.transition.default};
    }
  `};
`;

export const CustomersTableContentRowItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: 1.4rem;
    line-height: 1.8rem;
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      &:not(:last-child) {
        margin: 0 8px 0 0;
      }

      &:last-child {
        color: ${theme.colors.error};
      }
    }
  `};
`;

export const Tag = styled.div`
  background-color: rgba(0, 189, 19, 0.2);
  color: #059B14;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.2rem;
  padding: 4px 8px;
  border-radius: 2px;
  
  display: flex;
  justify-content: flex-start;
`;

export const EmptyBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 4px;
    padding: 24px;
    color: ${theme.colors.grey};
    height: 180px;
    border: 1px dashed ${theme.colors.grey};

    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      margin: 0 0 8px 0;
      font-size: 1.4rem;
    }

    > h3 {
      letter-spacing: -0.2px;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.2rem;
    }
  `};
`;

export const CustomerRowImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
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

      &::placeholder {
        opacity: 0.8;
      }
    }
  
    > svg {
      position: absolute;
      left: 18px;
      font-size: 1.6rem;
    }
  `};
`;

export const ContentHeaderSub = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`;
