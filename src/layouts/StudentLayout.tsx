import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { ProfileIcon, StatisticsIcon, TestingIcon } from "../icons/icons";

const Main = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
`;

const Aside = styled.aside`
  padding: 30px 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
  color: #09090b;
  transition: all 0.3s ease;
  &.active {
    background-color: #e8f5ff;
    color: #0e73f6;
    border-radius: 10px;
    border: none;
  }
  &:hover {
    background-color: #e8f5ff;
    color: #0e73f6;
    border-radius: 10px;
    border: none;
  }
`;

const MainContent = styled.section`
  padding: 30px 40px;
  background-color: #fbfbfb;
`;

export function StudentLayout() {
  return (
    <>
      <Main>
        <Aside>
          <Item
            to="/student/tests"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <TestingIcon />
            Тестирования
          </Item>
          <Item
            to="/student/statistics"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <StatisticsIcon />
            Статистика
          </Item>
          <Item
            to="/student/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ProfileIcon />
            Профиль
          </Item>
        </Aside>
        <MainContent>
          <Outlet />
        </MainContent>
      </Main>
      <footer></footer>
    </>
  );
}
