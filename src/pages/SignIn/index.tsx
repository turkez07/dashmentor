import React from 'react';
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
          <Brand />
          <ContentBoxTexts>
            <h1>Entre em sua conta</h1>
            <p>Faça login e gerencie seus produtos e mentorias.</p>
          </ContentBoxTexts>
          <Form>
            <InputControl>
              <small>Endereço de e-mail</small>
              <input type="text" placeholder="Digite seu e-mail" />
            </InputControl>
            <InputControl>
              <small>Senha</small>
              <input type="password" placeholder="Digite a sua senha" />
            </InputControl>
            <button type="button" onClick={handleLogin}>
              Entrar
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
