import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Psychologist = ({ psychologist, onToggleFavorite }) => {
  const {
    name,
    avatar_url,
    experience,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
    reviews,
  } = psychologist;

  return (
    <div>
      <h2>{name}</h2>
      <img src={avatar_url} alt={name} />
      <p>Experience: {experience}</p>
      <p>Price per hour: {price_per_hour}</p>
      <p>Rating: {rating}</p>
      <p>License: {license}</p>
      <p>Specialization: {specialization}</p>
      <p>Initial consultation: {initial_consultation}</p>
      <p>About: {about}</p>
      <button onClick={() => onToggleFavorite(psychologist)}>
        {psychologist.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li key={uuidv4()}>
            {' '}
            {/* Генерация уникального ключа */}
            <p>Reviewer: {review.reviewer}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Psychologist;
