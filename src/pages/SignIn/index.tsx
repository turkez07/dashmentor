import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { Login } = useAuth();

  async function handleLogin(): Promise<void> {
    Login({
      email: 'rodrigo.petry@bravosul.com.br',
      password: '123456',
    });
  }

  return (
    <Container>
      <button type="button" onClick={handleLogin}>Sign In</button>
    </Container>
  );
};

export default SignIn;
