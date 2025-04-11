import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/projects" className="sidebar-title">
        frankie
      </Link>

      <nav className="sidebar-nav">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;