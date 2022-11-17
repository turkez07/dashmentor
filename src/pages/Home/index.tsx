import React, { useState } from 'react';
import {
  RiNumbersLine,
  RiRocketLine,
  RiCalendarLine,
  RiLogoutBoxLine,
  RiUserStarLine,
  RiMenuFoldLine,
  RiMoreFill,
} from 'react-icons/ri';
import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  Content,
  ContentHeaderTexts,
  Sidebar,
  SidebarBrand,
  MenuItems,
  Item,
  Tag,
  ToggleButton,
  CalendarDropdDown,
  ContentHeader,
  ContentCharts,
  Navbar,
  UserImage,
  ContentTable,
  Table,
  TableItem,
  TableItemIcon,
  Price,
} from './styles';

const Home: React.FC = () => {
  const { Logout } = useAuth();
  const [toggled, setToggled] = useState<boolean>(true);

  function handleLogout(): void {
    Logout();
  }

  return (
    <Container>
      <Sidebar toggled={toggled}>
        <SidebarBrand>💡</SidebarBrand>
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

      <Content>
        <Navbar>
          <ToggleButton onClick={() => setToggled(!toggled)} toggled={toggled}>
            <RiMenuFoldLine />
          </ToggleButton>
          <h3>Olá, Arthur! 👋</h3>
          <UserImage src="https://images.squarespace-cdn.com/content/v1/5f4a76a972929a02697016c2/5f25fa2d-c94a-4205-be5d-cd07f04ed965/Steven+Memoji.png?format=300w" />
        </Navbar>
        <ContentHeader>
          <ContentHeaderTexts>
            <h2>Relatórios</h2>
            <small>
              <b>Tipos de relatório:</b>
              Financeiro, projetos e mentorias..
            </small>
          </ContentHeaderTexts>

          <CalendarDropdDown>Últimos 3 meses</CalendarDropdDown>
        </ContentHeader>
        <ContentCharts />

        <ContentHeader>
          <ContentHeaderTexts>
            <h2>Últimas movimentações</h2>
          </ContentHeaderTexts>
          <CalendarDropdDown>Ver todas</CalendarDropdDown>
        </ContentHeader>
        <ContentTable>
          <small>Agosto</small>
          <Table>
            <TableItem>
              <TableItemIcon>
                🔑
              </TableItemIcon>
              <h4>Lorem Ipsum dolor sit</h4>
              <span>8 de Agosto, 20:31</span>
              <Price status="expense">-R$ 50,00</Price>
              <RiMoreFill />
            </TableItem>
            <TableItem>
              <TableItemIcon>
                👨🏻‍💻
              </TableItemIcon>
              <h4>Lorem Ipsum dolor sit</h4>
              <span>8 de Agosto, 20:31</span>
              <Price status="revenue">+R$ 130,00</Price>
              <RiMoreFill />
            </TableItem>
          </Table>
          <small>Setembro</small>
          <Table>
            <TableItem>
              <TableItemIcon>
                🚗
              </TableItemIcon>
              <h4>Lorem Ipsum dolor sit</h4>
              <span>8 de Agosto, 20:31</span>
              <Price status="revenue">+R$ 14.310,00</Price>
              <RiMoreFill />
            </TableItem>
          </Table>
        </ContentTable>
      </Content>
    </Container>
  );
};

export default Home;
