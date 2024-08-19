import SavedMealsList from "../components/savedMealsList";
import NewSpinner from "../components/NewSpinner";
import Auth from "../utils/auth";

export default function CookPage() {
  if (!Auth.loggedIn()) {
    return (
      <div>
        <h2>Cook at Home</h2>
        <p>You must be logged in to use this page</p>
      </div>
    );
  }

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <h2>Cook at Home</h2>
      <SavedMealsList />
      <NewSpinner />
    </div>
  );
}
