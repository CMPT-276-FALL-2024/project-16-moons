import "../css/general.css";
import "../css/mealPlanner.css";
import GenerateRandomDish from "./randomDishComponents/generateRandomDish";

function MealPlannerPage() {
  return (
    <div>
      <GenerateRandomDish></GenerateRandomDish>
    </div>
  );
}

export default MealPlannerPage;
