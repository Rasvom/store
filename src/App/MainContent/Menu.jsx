import React from "react";
import styles from "./MainContent.module.css"
const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a>Гаджеты и аксессуары</a>
        </li>
        <hr/>
        <li>
          <a>Бытовая техника</a>
        </li>
        <hr/>
        <li>
          <a>Прочее</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
