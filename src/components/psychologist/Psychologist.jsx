import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Psychologist = ({ psychologist }) => {
  return (
    <div>
      <div>
        <h2>{psychologist.name}</h2>
        <img src={psychologist.avatar_url} alt={psychologist.name} />
        <p>Experience: {psychologist.experience}</p>
        <p>Price per hour: {psychologist.price_per_hour}</p>
        <p>Rating: {psychologist.rating}</p>
        <p>License: {psychologist.license}</p>
        <p>Specialization: {psychologist.specialization}</p>
        <p>Initial consultation: {psychologist.initial_consultation}</p>
        <p>About: {psychologist.about}</p>
      </div>
      <div>
        <h3>Reviews:</h3>
        <ul>
          {psychologist.reviews.map(review => (
            <li key={uuidv4()}>
              <p>Reviewer: {review.reviewer}</p>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Psychologist;
