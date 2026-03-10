import { NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Header = styled.header`
  padding: 20px 30px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export function AppLayout() {
  const location = useLocation();
  const dontLoockPage =
    location.pathname === "/student/profile" || location.pathname === "/login";

  return (
    <>
      {!dontLoockPage && (
        <Header>
          <Nav>
            <NavLinks>
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
            </NavLinks>
          </Nav>
        </Header>
      )}
      <main>
        <Outlet />
      </main>
      <footer>&copy; 2025</footer>
    </>
  );
}
