import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <nav className="nav-bar">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
        >
          About
        </NavLink>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">Student Portal 2026</footer>
    </>
  );
}

export default Layout;