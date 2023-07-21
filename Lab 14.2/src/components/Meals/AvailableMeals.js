import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const respone = await fetch(
        "https://meals-3e083-default-rtdb.firebaseio.com/meals.json"
      );
      const responeData = await respone.json();
      const loadedMeals = [];

      for (const key in responeData) {
        loadedMeals.push({
          id: key,
          name: responeData[key].name,
          price: responeData[key].price,
          description: responeData[key].description,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
