import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

import { Container } from '../SignIn/styles';

const Home: React.FC = () => {
  const { Logout } = useAuth();

  function handleLogout(): void {
    Logout();
  }

  return (
    <Container>
      <h1>Logado!</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default Home;
