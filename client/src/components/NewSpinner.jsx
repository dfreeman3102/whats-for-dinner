import { GET_USER_MEALS } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import React, { useState } from 'react';

export default function NewSpinner() {
  const { loading, error, data } = useQuery(GET_USER_MEALS, {
    variables: { userId: Auth.getUser().data._id },
  });

  const [rotation, setRotation] = useState(0);

  const meals = data?.user?.savedMeals || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("Error loading:", error);
    return <div>Error loading saved meals: {error.message}</div>;
  }

  if (meals.length === 0) {
    return <div>No saved meals</div>;
  }

  const angle = 360 / meals.length;

  const spin = () => {
    const newRotation = rotation + 360 + Math.floor(Math.random() * 360);
    setRotation(newRotation);
  };

  return (
    <div>
      <div className="spinner-container">
        <div 
          className="spinner-wheel" 
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {meals.slice(0, 10).map((meal, index) => (
            <div
              key={index}
              className="section"
              style={{
                transform: `rotate(${index * angle}deg) translate(-50%, -50%)`,
                backgroundColor: `hsl(${index * angle}, 70%, 60%)`,
              }}
            >
              {meal}
            </div>
          ))}
        </div>
      </div>
      <button onClick={spin}>Spin</button>
    </div>
  );
}
