import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Formulario enviado (simulación');
    //alert('Formulario enviado (simulación)');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section">
      <h2>Contáctame</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:peter.agudelo760@gmail.com">peter.agudelo760@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a 
              href="https://www.linkedin.com/in/peteragudelo/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/tu-perfil
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a 
              href="https://github.com/JaggerPeter" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/tu-usuario
            </a>
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
