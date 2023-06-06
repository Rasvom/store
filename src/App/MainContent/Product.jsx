import React from "react";
import styles from "./MainContent.module.css";

const Product = ({ image, price, title, discount }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt="товар" />
      <div className={styles.prices}>
        <span className={styles.price}>{price}</span>
        <span className={styles.discount}>{discount}</span>
      </div>
      <div className={styles.title}>{title}</div>
      <button className={styles.buybutton}>Купить</button>
    </div>
  );
};

export default Product;
