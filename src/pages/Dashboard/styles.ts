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

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;

    display: flex;
  `};
`;

export const DashboardOutlet = styled.div`
  padding: 46px 36px;
  flex: 1;

  display: flex;
  flex-direction: column;

  transition: 0.5s ease-out;
  animation: ${opacityAnimation} 1s ease-in-out;
`;
