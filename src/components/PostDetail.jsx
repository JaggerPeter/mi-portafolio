import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const PostDetail = () => {
  useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://server-9bpw.onrender.com/api/posts/1`);
        if (!response.ok) {
          throw new Error('Error al cargar el post');
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
        toast.success('Post cargado correctamente');
      } catch (err) {
        setError(err.message);
        setLoading(false);
        toast.error('Error al cargar el post');
      }
    };
  
    fetchPost();
  }, []);
  
  if (loading) return <div>Cargando post...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="post-detail">
      <h2>{post.title}</h2>
      <div className="post-meta">
        <span className="date">
          {new Date(post.created_at).toLocaleDateString()}
        </span>
        <span className="category">{post.category}</span>
      </div>
      <p>{post.content}</p>
    </section>
  );
};

export default PostDetail;
