const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        <article className="project-card">
          <h3>Proyecto SoundScape</h3>
          <p>Descripción: SoundScape es una aplicación web que permite a los usuarios crear y compartir paisajes sonoros personalizados combinando diferentes sonidos de la naturaleza, música ambiental y efectos de audio. Los usuarios pueden guardar sus creaciones, compartirlas con otros y explorar una biblioteca de sonidos predefinidos y contribuciones de la comunidad.</p>
          <div className="project-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
          </div>
          <button type="button" className="btn" onClick={() => console.log('Ver proyecto')}>
            Ver Proyecto
          </button>
        </article>
      </div>
    </section>
  );
};

export default Projects;
