import React from "react";
import styles from "./MainContent.module.css";

const Product = ({ image, price, name, discount }) => {
  return (
<table>
	<tbody>
		<tr>
			<td><img src={image} alt="" /></td>
		</tr>
		<tr>
			<td>{price} ₽</td>
		</tr>
		<tr>
			<td>{name}</td>
		</tr>
    <tr>
			<td><button className={styles.buybutton}>Купить</button></td>
		</tr>
	</tbody>
</table>
  );
};

export default Product;
