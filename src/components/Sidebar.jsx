import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/projects" className="sidebar-title">
        frankie
      </Link>

      <nav className="sidebar-nav">
      <NavLink
  to="/projects"
  className={({ isActive }) =>
    isActive ? "nav-link projects active" : "nav-link projects"
  }
>
  Projects
</NavLink>

<NavLink
  to="/experience"
  className={({ isActive }) =>
    isActive ? "nav-link experience active" : "nav-link experience"
  }
>
  Experience
</NavLink>

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "nav-link about active" : "nav-link about"
  }
>
  About Me
</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;