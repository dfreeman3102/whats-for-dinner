import Spinner from "../components/Spinner";
import { useState } from "react";
export default function CookPage() {
  const [meals, setMeals] = useState([]);
  const [addedMeal, setAddedMeal] = useState("");
  const addMeal = () => {
    if(addedMeal === "") return;
    setMeals([...meals, addedMeal]);
    setAddedMeal("");
  };
  return (
    <div>
      <h2>Cook at Home</h2>

      <h3>What meals can you cook?</h3>

      <input
        type="text"
        value={addedMeal}
        onChange={(e) => setAddedMeal(e.target.value)}
        placeholder="Enter Meals Here"
      />

      <button onClick={addMeal}>Add</button>

      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>

      <Spinner />
    </div>
  );
}
