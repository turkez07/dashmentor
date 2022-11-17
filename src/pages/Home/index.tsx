import React, { useState } from 'react';
import {
  RiNumbersLine,
  RiRocketLine,
  RiCalendarLine,
  RiLogoutBoxLine,
  RiUserStarLine,
  RiMenuFoldLine,
} from 'react-icons/ri';
import { useAuth } from '../../contexts/AuthContext';

import ThemeSwitcher from '../../components/ThemeSwitcher';

import {
  Container,
  Content,
  ContentHeaderTexts,
  Sidebar,
  MenuItems,
  Item,
  Tag,
  ToggleButton,
  ContentHeader,
  ContentCharts,
  Navbar,
  UserImage,
  ChartBox,
  ChartBoxHeader,
  UserInformations,
  // ContentTable,
  // Table,
  // TableItem,
  // TableItemIcon,
  // Price,
} from './styles';

const Home: React.FC = () => {
  const { Logout } = useAuth();
  const [toggled, setToggled] = useState<boolean>(false);

  function handleLogout(): void {
    Logout();
  }

  return (
    <Container>
      <Sidebar toggled={toggled}>
        {/* <SidebarBrand>💡</SidebarBrand> */}
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

      <Content>
        <Navbar>
          <ToggleButton onClick={() => setToggled(!toggled)} toggled={toggled}>
            <RiMenuFoldLine />
          </ToggleButton>
          <ThemeSwitcher />
        </Navbar>
        <ContentHeader>
          <ContentHeaderTexts>
            <h2>Relatórios</h2>
            <small>
              <b>Tipos de relatório:</b>
              Financeiro, projetos e mentorias..
            </small>
          </ContentHeaderTexts>
        </ContentHeader>

        <ContentCharts>
          <ChartBox>
            <ChartBoxHeader>
              <small>
                Entrada
                <span>+ 4,50%</span>
              </small>
              <h4>
                $33,587.96
              </h4>
            </ChartBoxHeader>
          </ChartBox>
          <ChartBox>
            <ChartBoxHeader>
              <small>
                Saída
                <span>+ 3,77%</span>
              </small>
              <h4>
                $3,289.05
              </h4>
            </ChartBoxHeader>
          </ChartBox>
          <ChartBox>
            <ChartBoxHeader>
              <small>
                Lucro
                <span>+ 10,25%</span>
              </small>
              <h4>
                $30,298.91
              </h4>
            </ChartBoxHeader>
          </ChartBox>
        </ContentCharts>

        {/* <ContentHeader>
          <ContentHeaderTexts>
            <h2>Últimas movimentações</h2>
          </ContentHeaderTexts>
          <CalendarDropdDown>Ver todas</CalendarDropdDown>
        </ContentHeader> */}
        {/* <ContentTable>
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
        </ContentTable> */}
      </Content>
    </Container>
  );
};

export default Home;
