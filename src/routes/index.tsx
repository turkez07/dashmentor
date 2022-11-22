import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Dashboard/Reports';
import Projects from '../pages/Dashboard/Projects';
import SignIn from '../pages/SignIn';

const Router: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Routes>
      {signed ? (
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Reports />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      ) : (
        <Route path="/" element={<SignIn />} />
      )}
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
