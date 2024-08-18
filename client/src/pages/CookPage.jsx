import Spinner from "../components/Spinner";
import SavedMealsList from "../components/savedMealsList";

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
    <div>
      <h2>Cook at Home</h2>
      <SavedMealsList />
      <Spinner />
    </div>
  );
}
