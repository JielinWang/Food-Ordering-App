import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="pizza-image" width={500} height={500} />
            <h1 className={styles.title}>pizza</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.desc}>
                Hot sauce and meat 
            </p>
        </div>
    );
};

export default PizzaCard;