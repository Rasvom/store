import React from "react";
import Menu from "./Menu";
import Product from "./Product";
import styles from "./MainContent.module.css";
import { products } from "../../products/products";

const MainContent = () => {
  return (
    <div className={styles.maincontent}>
      <Menu />
      <div className={styles.products}>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
