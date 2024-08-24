import { useQuery } from "@apollo/client";
import React, { useState, useRef } from 'react';
import Auth from "../utils/auth";
import { GET_USER_MEALS } from "../utils/queries";
import "./spinner.css";

export default function Spinner() {
  const { loading, error, data } = useQuery(GET_USER_MEALS, {
    variables: { userId: Auth.getUser().data._id },
  });

  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  const meals = data?.user?.savedMeals || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("Error loading:", error);
    return <div>Error loading saved meals: {error.message}</div>;
  }

  const angle = 360 / meals.length;

  const spin = () => {
    const newRotation = rotation + 360 + Math.floor(Math.random() * 360);
    setRotation(newRotation);
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${newRotation}deg)`;
    }
  };

  return (
    <div className="container">
      <button className="spinBtn" onClick={spin}>Spin</button>
      <div className="wheel spinner-container" ref={wheelRef}>
        {meals.slice(0, 8).map((meal, index) => (
          <div
            key={index}
            className="number section"
            style={{
              "--i": index + 1,
              "--clr": `hsl(${index * angle}, 70%, 60%)`,
              transform: `rotate(${index * angle}deg)`,
            }}
          >
            <span>{meal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
