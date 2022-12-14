import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import {
  Container,
  DashboardOutlet,
} from './styles';

const Dashboard: React.FC = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <Container>
      <Sidebar toggled={toggled} />
      <DashboardOutlet>
        <Navbar toggled={toggled} toggleSidebar={() => setToggled(!toggled)} />
        <Outlet />
      </DashboardOutlet>
    </Container>
  );
};

export default Dashboard;
