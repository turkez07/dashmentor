import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

import SignIn from '../pages/SignIn';
// Dashboard authenticated navigation routes.
import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Dashboard/Reports';
import NewMentorship from '../pages/Dashboard/Mentorships/NewMentorship';
import Mentorships from '../pages/Dashboard/Mentorships';
import Tasks from '../pages/Dashboard/Tasks';
import Customers from '../pages/Dashboard/Customers';
import Calendar from '../pages/Dashboard/Calendar';

const Router: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Routes>
      {signed ? (
        <Route path="" element={<Dashboard />}>
          <Route index element={<Reports />} />
          <Route path="mentorships">
            <Route index path="" element={<Mentorships />} />
            <Route path="new" element={<NewMentorship />} />
          </Route>
          <Route path="tasks" element={<Tasks />} />
          <Route path="customers" element={<Customers />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
