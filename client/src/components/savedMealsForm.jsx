import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_MEAL } from "../utils/mutations";
import Auth from "../utils/auth";

export default function SavedMealsForm() {
  const [mealName, setMealName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [saveMeal] = useMutation(SAVE_MEAL);

  const userId = Auth.getUser().data?._id;

  const handleFormSubmit = async (event) => {
    if (mealName.trim() === "") {
      setError("Meal name cannot be empty");
      return;
    }

    if (!userId) {
      setError("User ID is not available");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await saveMeal({
        variables: { userId: userId, savedMeal: mealName },
      });
      setMealName("");
    } catch (err) {
      console.error("Error saving meal:", err);
      setError(err?.message || "An error occurred while saving the meal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Meal Name"
            value={mealName}
            onChange={(event) => setMealName(event.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Meal"}
          </button>
          {error && <p>Error: {error}</p>}
        </form>
      ) : (
        <p>You need to be logged in to save meals</p>
      )}
    </div>
  );
}
