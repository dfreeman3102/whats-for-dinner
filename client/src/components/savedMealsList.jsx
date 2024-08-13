import { GET_USER_MEALS } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

export default function SavedMealsList() {
  const { loading, error, data } = useQuery(GET_USER_MEALS, {
    variables: { userId: Auth.getUser().data._id },
  });

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

  return (
    <div>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal}
            <button onClick={() => console.log("Delete meal:", meal)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
