import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LuLu&apos;s Pizza</h1>
      <div className={styles.desc}>
        <p>
          We are obsessed with making our pizza packed with phenomenon flavor in
          Chicago.
        </p>
        <p>
          From first to the last bite, eating a slice is a journey.Our brick
          oven baked, thin-crust artisan pizza evolved from LuLu&apos;s quest to
          fine-tune a dough recipe.
        </p>
        <p>
          From the soft center, to the chew of the middle, and finally, to the
          crunch of the heel, the flavor experience evolves as you travel. From
          one big journey to one beautiful pie, we&apos;re excited to have you
          along for the ride.
        </p>
      </div>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
