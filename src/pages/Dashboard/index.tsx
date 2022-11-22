import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  RiNumbersLine,
  RiRocketLine,
  RiCalendarLine,
  RiLogoutBoxLine,
  RiUserStarLine,
} from 'react-icons/ri';

import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  DashboardOutlet,
  Sidebar,
  MenuItems,
  Item,
  Tag,
  UserImage,
  UserInformations,
} from './styles';

const Dashboard: React.FC = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  const { Logout } = useAuth();

  function handleLogout(): void {
    Logout();
  }

  return (
    <Container>
      <Sidebar toggled={toggled}>
        <UserInformations>
          <UserImage src="https://images.squarespace-cdn.com/content/v1/5f4a76a972929a02697016c2/5f25fa2d-c94a-4205-be5d-cd07f04ed965/Steven+Memoji.png?format=300w" />
          <h3>Olá, Arthur! 👋</h3>
        </UserInformations>
        <MenuItems>
          <Item active>
            <RiNumbersLine />
            <span>Relatórios</span>
            <Tag>Novo!</Tag>
          </Item>
          <Item>
            <RiRocketLine />
            <span>Projetos</span>
          </Item>
          <Item>
            <RiCalendarLine />
            <span>Agenda</span>
          </Item>
          <Item>
            <RiUserStarLine />
            <span>Mentorados</span>
          </Item>
          <Item onClick={() => handleLogout()}>
            <RiLogoutBoxLine />
            <span>Sair</span>
          </Item>
        </MenuItems>
      </Sidebar>
      <DashboardOutlet>
        <Outlet />
      </DashboardOutlet>
    </Container>
  );
};

export default Dashboard;
