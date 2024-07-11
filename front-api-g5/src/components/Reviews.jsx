import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentForm from '../components/CommentForm'; 

const Reviews = ({ movieId, userId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/api/comments?movieId=${movieId}`);
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
        movie_id: movieId
      });
      // Recargar los comentarios después de añadir uno nuevo
      fetchReviews();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className='my-8'>
      <h3 className='text-3xl font-extrabold'>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.comment_id} className='my-4'>
            <p>{review.comment_text}</p> {/* Ajusta según la estructura de tus datos */}
          </li>
        ))}
      </ul>
      {/* Pasar movieId y userId al formulario de comentarios */}
      <CommentForm movieId={movieId} userId={userId} onAddReview={handleAddReview} />
    </div>
  );
};

export default Reviews;
