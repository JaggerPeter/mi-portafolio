import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink></li>
        <li><NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'active' : ''}>Sobre mí</NavLink></li>
        <li><NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}>Proyectos</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
        <li><NavLink to="/BlogAdmin" className={({ isActive }) => isActive ? 'active' : ''}>Administrador Blog</NavLink></li>
        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contáctame</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
