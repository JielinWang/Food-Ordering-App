import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/Featured1.png",
    "/img/Featured2.png",
    "/img/Featured3.png",
    "/img/Featured4.png",
    "/img/Featured5.png",
    "/img/Featured6.png",
    "/img/Featured7.png",
    "/img/Featured8.png",
    "/img/Featured9.png",
    "/img/Featured10.png",
    "/img/Featured11.png",
    "/img/Featured12.png",
    "/img/Featured13.png",
    "/img/Featured14.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 6);
    }
    if (direction === "r") {
      setIndex(index !== 6 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrow1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrow2.png"
          layout="fill"
          alt="right-arrow"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
