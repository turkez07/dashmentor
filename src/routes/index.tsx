import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import AuthenticatedRoutes from './AuthenticatedRoutes';
import OtherRoutes from './OtherRoutes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <AuthenticatedRoutes /> : <OtherRoutes />;
};

export default Routes;
