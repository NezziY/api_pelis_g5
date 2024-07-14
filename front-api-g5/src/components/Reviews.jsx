import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentForm from '../components/CommentForm'; 

const Reviews = ({ movieId, seriesId, userId, type }) => {
  const [reviews, setReviews] = useState([]);
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, [movieId, seriesId]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3030/api/comments', {
        params: {
          movie_id: movieId,
          series_id: seriesId,
        },
      });
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleAddReview = async (reviewText) => {
    try {
      await axios.post('http://localhost:3030/api/comments', {
        comment_text: reviewText,
        user_id: userId,
        movie_id: type === 'movie' ? movieId : null,
        series_id: type === 'series' ? seriesId : null,
        comment_type: type,
      });
      fetchReviews();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const handleDeleteReview = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3030/api/comments/${commentId}`);
      fetchReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleEditReview = (comment) => {
    setEditingComment(comment);
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
  };

  const handleUpdateReview = async (updatedText) => {
    try {
      await axios.put(`http://localhost:3030/api/comments/${editingComment.comment_id}`, {
        comment_text: updatedText,
      });
      fetchReviews();
      setEditingComment(null); // Clear editing state after update
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  return (
    <div className='my-8'>
      <h3 className='text-3xl font-extrabold'>Reviews</h3>
      <ul className="space-y-4">
        {reviews.map(review => (
          <li key={review.comment_id} className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-gray-800'>{review.comment_text}</p>
            <div className="flex space-x-2 mt-2">
              <button 
                onClick={() => handleEditReview(review)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                Editar
              </button>
              <button 
                onClick={() => handleDeleteReview(review.comment_id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <CommentForm 
        movieId={movieId} 
        seriesId={seriesId} 
        userId={userId} 
        type={type} 
        onAddReview={handleAddReview} 
        editComment={!!editingComment} 
        commentId={editingComment?.comment_id} 
        initialText={editingComment?.comment_text}
        onUpdateReview={handleUpdateReview} // Pass the update handler to the form
      />
      {editingComment && (
        <button 
          onClick={handleCancelEdit}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancelar Edición
        </button>
      )}
    </div>
  );
};

export default Reviews;
