import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ movieId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3030/api/comments', {
        comment_text: commentText,
        movie_id: movieId,
        // Aquí podrías incluir más campos como user_id si es necesario
      });
      alert('Comentario creado exitosamente');
      setCommentText('');
      // Aquí podrías manejar la actualización de la lista de comentarios si es necesario
    } catch (error) {
      console.error('Error al crear comentario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Escribe tu comentario aquí"
        required
      />
      <button type="submit">Enviar Comentario</button>
    </form>
  );
};

export default CommentForm;
