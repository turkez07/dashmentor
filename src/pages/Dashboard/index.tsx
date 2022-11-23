import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  RiNumbersLine,
  RiGroupLine,
  RiCalendarLine,
  RiLogoutBoxLine,
  RiUser4Line,
  RiTodoLine,
} from 'react-icons/ri';

import Navbar from '../../components/Navbar';

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

  const attributteClassName = (navData: any): string => (navData.isActive ? 'isActive' : '');

  return (
    <Container>
      <Sidebar toggled={toggled}>
        <UserInformations>
          <UserImage src="https://images.squarespace-cdn.com/content/v1/5f4a76a972929a02697016c2/5f25fa2d-c94a-4205-be5d-cd07f04ed965/Steven+Memoji.png?format=300w" />
          <h3>Olá, Arthur! 👋</h3>
        </UserInformations>
        <MenuItems>
          <NavLink to="/" className={attributteClassName}>
            <Item>
              <RiNumbersLine />
              <span>Relatórios</span>
              <Tag>Novo!</Tag>
            </Item>
          </NavLink>
          <NavLink to="Mentorships" className={attributteClassName}>
            <Item>
              <RiGroupLine />
              <span>Mentorias</span>
            </Item>
          </NavLink>
          <NavLink to="calendar" className={attributteClassName}>
            <Item>
              <RiCalendarLine />
              <span>Agenda</span>
            </Item>
          </NavLink>
          <NavLink to="tasks" className={attributteClassName}>
            <Item>
              <RiTodoLine />
              <span>Tarefas</span>
            </Item>
          </NavLink>
          <NavLink to="mentees" className={attributteClassName}>
            <Item>
              <RiUser4Line />
              <span>Clientes</span>
            </Item>
          </NavLink>

          <Item onClick={() => handleLogout()}>
            <RiLogoutBoxLine />
            <span>Sair</span>
          </Item>
        </MenuItems>
      </Sidebar>
      <DashboardOutlet>
        <Navbar toggled={toggled} toggleSidebar={() => setToggled(!toggled)} />
        <Outlet />
      </DashboardOutlet>
    </Container>
  );
};

export default Dashboard;
