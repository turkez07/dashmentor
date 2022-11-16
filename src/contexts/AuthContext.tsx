import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import api from '../services/api';

type Props = { children: React.ReactNode };

interface UserTypes {
  email: string;
  name?: string;
  password?: string;
}

interface AuthContextData {
  signed: boolean;
  user: UserTypes | null;
  Login(userData: UserTypes): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: Props): any => {
  const [user, setUser] = useState<UserTypes | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: UserTypes): Promise<void> {
    const signInResponse = {
      user: {
        ...userData,
        name: 'Rodrigo Petry',
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    };

    setUser(signInResponse?.user);

    api.defaults.headers.common.Authorization = `Bearer ${signInResponse?.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(signInResponse?.user));
    sessionStorage.setItem('@App:token', signInResponse?.token);
  }

  function Logout(): void {
    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user), user, Login, Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const authContext = useContext(AuthContext);

  return authContext;
}

export default AuthContext;
