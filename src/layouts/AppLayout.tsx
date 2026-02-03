import { NavLink, Outlet, useLocation } from "react-router-dom";
import { StudentHeader } from "../components/student/StudentHeader";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function AppLayout() {
  const location = useLocation();
  const profilePage = location.pathname === "/student/profile";
  const LoginPage = location.pathname === "/login";

  return (
    <>
      {!LoginPage && (
        <Header>
          <nav>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/student"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Student
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Admin
            </NavLink>
          </nav>
          {!profilePage && (
            <StudentHeader
              fullName="Никитос 403"
              title="На главную"
              avatarUrl="https://sun9-81.userapi.com/s/v1/ig2/uhLasTmtHwB37VIeRnwCnMnU_IN6aVGmo6J5xnuO1nk1_D1KywuZ60xfltF89-S4lcA6iKM1SgB9xWEcecSaDdkM.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960&from=bu&cs=1280x0"
              social={{ link: "https://t.me/Luffy403", label: "Joker_403" }}
              backTo="/"
            />
          )}
        </Header>
      )}
      <main>
        <Outlet />
      </main>
      {!LoginPage && <footer>&copy; 2025</footer>}
    </>
  );
}
