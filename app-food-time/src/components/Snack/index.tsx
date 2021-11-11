import React from "react";
import styles from "./styles.module.scss";

interface Snack {
  image: string;
  name: string;
  price: Number;
  ingredients: string;
}

function Snack({ image, name, price, ingredients }: Snack) {
  return (
    <div className={styles.SnackWrapper}>
      <div className={styles.SnackImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.SnackDetails}>
        <p className={styles.SnackDetailsName}>{name}</p>
        <p className={styles.SnackDetailsPrice}>{price}</p>
      </div>
      <div>
        <h4>Ingredientes</h4>
        <p>{ingredients}</p>
      </div>
      <div>
        <button onClick={() => alert("Showw")}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export { Snack };
