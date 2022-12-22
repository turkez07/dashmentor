import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  RiNumbersLine,
  RiGroupLine,
  RiCalendarLine,
  RiLogoutBoxLine,
  RiUser4Line,
  RiTodoLine,
} from 'react-icons/ri';

import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  UserInformations,
  UserImage,
  MenuItems,
  Item,
  Tag,
} from './styles';

interface SidebarProps {
  toggled: boolean;
}

const Sidebar = ({ toggled }: SidebarProps): any => {
  const attributteClassName = (navData: any): string => (navData.isActive ? 'isActive' : '');

  const { Logout } = useAuth();

  function handleLogout(): void {
    Logout();
  }

  return (
    <Container toggled={toggled}>
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
        <NavLink to="mentorships" className={attributteClassName}>
          <Item>
            <RiGroupLine />
            <span>Mentorias</span>
          </Item>
        </NavLink>
        <NavLink to="tasks" className={attributteClassName}>
          <Item>
            <RiTodoLine />
            <span>Tarefas</span>
          </Item>
        </NavLink>
        <NavLink to="customers" className={attributteClassName}>
          <Item>
            <RiUser4Line />
            <span>Clientes</span>
          </Item>
        </NavLink>
        <NavLink to="calendar" className={attributteClassName}>
          <Item>
            <RiCalendarLine />
            <span>Agenda</span>
          </Item>
        </NavLink>

        <Item onClick={() => handleLogout()}>
          <RiLogoutBoxLine />
          <span>Sair</span>
        </Item>
      </MenuItems>
    </Container>
  );
};

export default Sidebar;
