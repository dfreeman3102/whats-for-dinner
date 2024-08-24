import { GET_USER_MEALS } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_MEAL } from "../utils/mutations";

export default function SavedMealsList() {
  const [removeMeal] = useMutation(REMOVE_MEAL, {
    refetchQueries: [
      { query: GET_USER_MEALS, variables: { userId: Auth.getUser().data._id } },
    ],
  });
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

  const handleRemoveMeal = async (meal) => {
    try {
      await removeMeal({
        variables: { userId: Auth.getUser().data._id, savedMeal: meal },
      });
    } catch (err) {
      console.error("Error removing meal:", err);
    }
  };

  if (meals.length > 8) {
    return (
      <div>
        <div>Maximum of 8 meals exceeded, please remove an option.</div>
        <ul>
          {meals.map((meal, index) => (
            <li
              key={index}
              style={{
                padding: "5px",
                margin: "5px",
                listStyle: "none",
                display: "inline-grid",
                border: `2px solid white`,
                borderRadius: "5px",
              }}
            >
              {meal}
              <button onClick={() => handleRemoveMeal(meal)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {meals.map((meal, index) => (
          <li
            key={index}
            style={{
              padding: "5px",
              margin: "5px",
              listStyle: "none",
              display: "inline-grid",
              border: `2px solid white`,
              borderRadius: "5px",
            }}
          >
            {meal}
            <button onClick={() => handleRemoveMeal(meal)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
