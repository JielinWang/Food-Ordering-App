import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.jpeg"
            alt="phone_logo"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>404-226-3287</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/img/Logo.png"
            alt="brand_logo"
            width={230}
            height={130}
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <a>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image
                src="/img/cart.png"
                alt="cart_logo"
                width={35}
                height={35}
              />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
