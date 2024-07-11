import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ movieId, userId, seriesId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3030/api/comments', {
        comment_text: commentText,
        user_id: userId,
        movie_id: movieId,
        series_id: seriesId
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
      className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Escribe tu comentario aquí"
        required
      />
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4'>Enviar Comentario</button>
    </form>
  );
};

export default CommentForm;
