import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  Brand,
  LeftContent,
  Form,
  ContentBox,
  ContentBoxTexts,
  InputControl,
  AccessBox,
} from './styles';

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
      <LeftContent>
        <ContentBox>
          <Brand>
            🔥
          </Brand>
          <ContentBoxTexts>
            <h1>Entre em sua conta</h1>
            <p>Faça login e gerencie seus produtos e mentorias.</p>
          </ContentBoxTexts>
          <Form onSubmit={() => handleLogin()}>
            <InputControl>
              <small>Endereço de e-mail</small>
              <input type="email" placeholder="Digite seu e-mail" required />
            </InputControl>
            <InputControl>
              <small>Senha</small>
              <input type="password" placeholder="Digite a sua senha" required />
            </InputControl>
            <button type="submit">
              Entrar
              <RiLogoutBoxRLine />
            </button>
          </Form>
        </ContentBox>
        <AccessBox>
          <span>
            💬
          </span>
          Se você não possui dados para entrar, contate o administrador.
        </AccessBox>
      </LeftContent>
    </Container>
  );
};

export default SignIn;
