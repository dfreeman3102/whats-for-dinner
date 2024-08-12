import SavedMealsForm from '../components/savedMealsForm';
import SavedMealsList from "../components/savedMealsList";

export default function SettingsPage() {
   
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
