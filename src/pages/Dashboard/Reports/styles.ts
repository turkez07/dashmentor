import styled, { css } from 'styled-components';

export const Content = styled.div``;

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

export const MainContentCharts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
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

export const ChartBox = styled.div<{ hidden?: boolean }>`
  ${({ theme, hidden }) => css`
    background-color: ${theme.colors.secondaryBackground};
    flex: 1;
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    position: relative;
    transition: all 300ms ease-out 0s;
    border: 1px solid transparent;
    cursor: pointer;

    box-shadow: ${theme.shadows.default};

    display: flex;
    align-items: center;

    &:hover {
      transform: translateY(-4px) translateZ(0);
      border-color: ${theme.colors.primary};
    }

    > button {
      background-color: transparent;

      > svg {
        font-size: 1.4rem;
        color: ${theme.colors.primary};
      }
    }

    > div {
      h4 > span {
        background: ${theme.colors.background};
        width: 0;

        ${hidden
        && css`
          width: 100%;
        `}
      }
    }
  `};
`;

export const ChartBoxHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
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

      > span {
        display: flex;
        align-items: center;

        > svg {
          margin-right: 6px;
          font-size: 1.6rem;
        }
      }
    }
  `};
`;

export const ChartBoxIcon = styled.div`
  ${({ theme }) => css`
    width: 66px;
    height: 66px;
    background-color: rgba(255, 182, 36, 0.05);
    border-radius: 8px;
    margin: 0 18px 0 0;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 2.3rem;
      color: ${theme.colors.primary};
    }
  `};
`;

export const ChartBoxTexts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    color: ${theme.colors.grey};

    > h4 {
      font-size: 2.4rem;
      font-weight: 400;
      position: relative;
      transition: ${theme.transition.default};
    }

    > small {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 111.5%;
      margin: 0 0 2px 0;
      opacity: 0.8;
    }
  `};
`;

export const HideBlock = styled.span`
  ${({ theme }) => css`
    position: absolute;
    transition: 180ms ease-in-out;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  `};
`;

interface ChecklistProps {
  checked?: boolean;
}

interface StepProps {
  filled?: boolean;
}

export const TasksContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    border-radius: 8px;
    margin-top: 24px;
    padding: 22px;
    box-shadow: ${theme.shadows.default};
    max-width: 40%;
    width: 100%;

    @media (max-width: 768px) {
      background-color: transparent;
      padding: 0;
      margin-bottom: 80px;
    }
  `};
`;

export const TasksHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > h4 {
      color: ${theme.colors.grey};
      font-size: 1.4rem;
      font-weight: bold;

      @media (max-width: 768px) {
        color: white;
        font-size: 1rem;
      }
    }

    > small {
      color: rgba(27, 27, 27, 0.5);
      font-size: 1.2rem;
      font-weight: normal;
    }
  `};
`;

export const TasksContent = styled.div`
  margin-top: 30px;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const Checklist = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProgressBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${theme.colors.primary};
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 1rem;
    margin-top: 22px;

    > span {
      color: ${theme.colors.grey};
    }

    @media (max-width: 768px) {
      display: none;
    }

    > small {
      font-weight: bold;
      font-size: 1rem;
      color: ${theme.colors.grey};
    }
  `};
`;

export const RoundedPercentage = styled.div`
  ${({ theme }) => css`
    margin-right: 20px;
    width: 120px;
    height: 120px;

    @media (max-width: 768px) {
      width: 81px;
      height: 81px;
    }

    .circular-chart {
      display: block;
      margin: 0 auto;
      max-height: 250px;
    }

    .circle-bg {
      fill: none;
      stroke: rgba(232, 232, 232, 0.5);
      stroke-width: 2;
    }

    .circle {
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke: #fbbc05;
      animation: progress 1s ease-out forwards;
    }

    @keyframes progress {
      0% {
        stroke-dasharray: 0 100;
      }
    }

    .percentage {
      fill: #fbbc05;
      font-size: 0.7rem;
      font-weight: bold;
      text-anchor: middle;

      display: flex;
    }
  `}
`;

export const Item = styled.div<ChecklistProps>`
  ${({ theme, checked }) => css`
    background-color: rgba(0, 0, 0, 0.2);
    padding: 4px 5px;
    border-radius: 4px;
    margin-bottom: 7px;
    min-height: 30px;
    border: 1px solid ${theme.colors.background};

    display: flex;
    align-items: center;

    ${checked
    && css`
      border-color: #04d980;
    `}

    > input {
      padding: 0;
      height: initial;
      width: initial;
      margin-bottom: 0;
      display: none;
      cursor: pointer;
    }

    > label {
      position: relative;
      cursor: pointer;
      color: ${theme.colors.grey};
      font-size: 1rem;
      line-height: 110%;

      display: flex;
      align-items: center;
    }

    > label:before {
      content: '';
      -webkit-appearance: none;
      background-color: ${theme.colors.secondaryBackground};
      border: 2px solid ${theme.colors.secondaryBackground};
      border-radius: 2px;
      min-height: 8px;
      min-width: 8px;
      display: block;
      position: relative;
      cursor: pointer;
      margin-right: 6px;
    }

    > input:checked + label:before {
      background-color: #04d980;
      border-color: #04d980;
    }

    > input:checked + label:after {
      content: '';
      display: block;
      position: absolute;
      top: 2px;
      left: 4.5px;
      width: 2px;
      height: 5px;
      border: solid #fff;
      border-width: 0 1.3px 1.3px 0;
      transform: rotate(30deg);
    }
  `};
`;

export const Steps = styled.div`
  display: flex;
`;

export const Step = styled.div<StepProps>`
  ${({ theme, filled }) => css`
    height: 2px;
    width: 35px;
    background: rgba(232, 232, 232, 0.5);
    border-radius: 50px;

    position: relative;

    :not(:last-child) {
      margin-right: 5px;
    }

    ${filled
    && css`
      border-color: #04d980;
      background-color: ${theme.colors.primary};

      ::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        height: 100%;
        width: 0%;
        background-color: #fbbc05;
        border-radius: 50px;
      }
    `}
  `};
`;
