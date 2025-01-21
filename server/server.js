const express = require('express');
const cors = require('cors');
const pool = require('./db.jsx');

const app = express();

// Middleware base de datos
app.use(cors());
app.use(express.json());

// Rutas para posts del blog
// GET - Obtener todos posts
app.get('/api/posts', async (req, res) => {
  try {
    const allPosts = await pool.query(
      'SELECT * FROM blog_posts ORDER BY created_at DESC'
    );
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Error del servidor');
  }
});

// POST - Crear nuevo post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const newPost = await pool.query(
      'INSERT INTO blog_posts (title, content, category) VALUES($1, $2, $3) RETURNING *',
      [title, content, category]
    );
    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Error del servidor');
  }
});

// GET - Obtener post específico
app.get('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query('SELECT * FROM blog_posts WHERE id = $1', [id]);
    res.json(post.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Error del servidor');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});