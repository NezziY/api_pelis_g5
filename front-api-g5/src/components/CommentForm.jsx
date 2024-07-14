import React, { useState, useEffect } from 'react';

const CommentForm = ({ movieId, seriesId, userId, type, onAddReview, onUpdateReview, editComment, commentId, initialText }) => {
  const [commentText, setCommentText] = useState(initialText || '');

  useEffect(() => {
    setCommentText(initialText || '');
  }, [initialText]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editComment && onUpdateReview) {
        await onUpdateReview(commentText);
      } else {
        await onAddReview(commentText);
      }
      alert('Comentario guardado exitosamente');
      setCommentText('');
    } catch (error) {
      console.error('Error al guardar comentario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-3">{editComment ? 'Editar Comentario' : 'Añadir Comentario'}</h4>
      <textarea
        className='block w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Escribe tu comentario aquí"
        required
      />
      <button type="submit" className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        {editComment ? 'Guardar Cambios' : 'Enviar Comentario'}
      </button>
    </form>
  );
};

export default CommentForm;
