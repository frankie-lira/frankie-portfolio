import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">frankie</h1>
      <nav className="sidebar-nav">
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;