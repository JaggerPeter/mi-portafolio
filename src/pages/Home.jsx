import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero">
      <h2>Bienvenido a mi Portafolio</h2>
      <p className="lead">Soy un desarrollador web junior apasionado por crear experiencias digitales únicas.</p>
      <div className="cta-buttons">
        <NavLink to="/proyectos" className="btn primary">Ver Proyectos</NavLink>
        <NavLink to="/contacto" className="btn secondary">Contáctame</NavLink>
      </div>
    </section>
  );
};

export default Home;
  
