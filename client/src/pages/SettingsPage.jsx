import SavedMealsForm from '../components/savedMealsForm';
import SavedMealsList from "../components/savedMealsList";
import Auth from "../utils/auth";

export default function SettingsPage() {
  if(!Auth.loggedIn()) {
    return <p>You need to be logged in to view this page</p>;
  } else {
  return (
    <div>
      <h2>Settings Page</h2>
      <div className="saved-meals">
        <SavedMealsForm />
        <h3>Saved Meals</h3>
        <SavedMealsList />
      </div>
    </div>
  );
}
};