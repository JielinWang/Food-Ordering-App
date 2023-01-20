import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="background-image" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LuLu&apos;s features an open kitchen, 18 seat bar and 142 seat
            restaurant with floor to ceiling windows that open up onto the river
            walk. LuLu&apos;s dock and patio is one of the best kept secrets in
            the city!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Chicago, 60601
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Chicago, 60603
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Chicago, 60608
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> Chicago, 60607
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00am – 22:00pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00pm – 24:00am
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
