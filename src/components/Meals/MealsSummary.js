import React from "react";
import classes from './MealsSummary.module.css'
export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our board selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, judt-in-time and
        of course by exeperinced chefs!
      </p>
    </section>
  );
}
