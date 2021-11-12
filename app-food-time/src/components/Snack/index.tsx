import React from "react";
import styles from "./styles.module.scss";

export interface ISnack {
  image: string;
  name: string;
  price: Number;
  ingredients: string;
}

function Snack({ image, name, price, ingredients }: ISnack) {
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
        <button onClick={() => console.log({ image, name })}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export { Snack };
