import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      if (!response.ok) {
        throw new Error('Error al cargar los posts');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Cargando posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="blog-section">
      <h2>Blog</h2>
      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <div className="post-content">
              {/* Enlace al detalle del post */}
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <div className="post-meta">
                <span className="date">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
                <span className="category">{post.category}</span>
              </div>
              <p>{post.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;