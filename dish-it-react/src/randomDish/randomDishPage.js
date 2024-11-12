import "./styles.css";
import NavBar from "./randomDishComponents/navBar";
import GenerateRandomDish from "./randomDishComponents/generateRandomDish";

function RandomDishPage() {
  return (
    <div>
      <NavBar></NavBar>
      <GenerateRandomDish></GenerateRandomDish>
    </div>
  );
}

export default RandomDishPage;
