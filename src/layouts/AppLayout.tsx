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
          {!profilePage && <StudentHeader />}
        </Header>
      )}
      <main>
        <Outlet />
      </main>
      {!LoginPage && <footer>&copy; 2025</footer>}
    </>
  );
}
