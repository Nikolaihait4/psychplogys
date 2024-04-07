// components/Psychologist.js
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Psychologist = ({
  psychologist,
  isFavorite,
  onAddToFavorite,
  onRemoveFromFavorite,
}) => {
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
      {/* При клике на кнопку вызываем соответствующую функцию */}
      {isFavorite ? (
        <button onClick={onRemoveFromFavorite}>Remove from Favorites</button>
      ) : (
        <button onClick={onAddToFavorite}>Add to Favorites</button>
      )}
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li key={uuidv4()}>
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
