const About = () => {
  return (
    <section className="about-content">
      <h2>Sobre Mí</h2>
      <div className="profile-info">
        <div className="profile-image">
          <img src="/images/01.jpg" alt="Mi foto de perfil" />
        </div>
        <div className="profile-text">
          <h3>¿Quién soy?</h3>
          <p>¡Bienvenidos a mi espacio digital! Soy un desarrollador web junior con una pasión desbordante por crear experiencias web únicas y funcionales. Mi viaje en el mundo del desarrollo comenzó con curiosidad y se ha convertido en una búsqueda constante de innovación.

          Actualmente, estoy enfocado en dominar las tecnologías fundamentales del desarrollo web mientras construyo proyectos que desafían mis habilidades. Cada línea de código que escribo es una oportunidad para aprender y mejorar. Me caracterizo por mi atención al detalle, mi capacidad para resolver problemas de manera creativa y mi entusiasmo por mantenerme actualizado en este campo en constante evolución.
          
          Cuando no estoy frente a la pantalla escribiendo código, me encontrarás explorando nuevas tecnologías y participando activamente en comunidades de desarrolladores. Creo firmemente en el poder de la tecnología para transformar ideas en realidades digitales impactantes.</p>
                              
          <h3>Habilidades Técnicas</h3>
          <ul className="skills-list">
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Git</li>
          </ul>
          
          <h3>Experiencia</h3>
          <div className="experience-item">
            <h4>Desarrollador Web - Empresa XYZ</h4>
            <p>2020 - Presente</p>
            <p>Como desarrollador web full-stack, me encargué del desarrollo front-end con React, Redux y Material UI para crear interfaces de usuario atractivas y funcionales, mientras que en el backend utilicé Node.js y Express.js para construir APIs robustas. Implementé la base de datos con PostgreSQL, asegurando la integridad de los datos y optimizando las consultas. Colaboré estrechamente con el equipo de diseño para integrar la identidad visual de la marca y apliqué pruebas unitarias y de integración para garantizar la calidad del código. Además, logré aumentar la tasa de conversión de una aplicación web en un 15% al mejorar la usabilidad del proceso de compra.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;