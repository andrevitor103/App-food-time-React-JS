import React from "react";
import styles from "./styles.module.scss";

interface Item {
  image: string;
  name: string;
  price: number;
}

function ItemCar({ image, name, price }: Item) {
  return (
    <div className={styles.itemCarWrapper}>
      <div className={styles.itemCarImage}>
        <img src={image} alt={name} />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <div className={styles.itemCarName}>
          <p>{name}</p>
        </div>
        <div className={styles.itemCarInformations}>
          <p className={styles.itemCarInformationsValue}>{price}</p>
          <p className={styles.itemCarInformationsQuant}>1</p>
        </div>
        <div className={styles.itemCarActions}>
          <button className={styles.itemCarActionsLess}>-</button>
          <button className={styles.itemCarActionsMore}>+</button>
        </div>
      </div>
    </div>
  );
}

export { ItemCar };
