import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = ({ movieId }) => {
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

  return (
    <div className='my-8'>
      <h3 className='text-3xl font-extrabold'>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.comment_id}> {/* Utiliza un campo único como _id como key */}
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

