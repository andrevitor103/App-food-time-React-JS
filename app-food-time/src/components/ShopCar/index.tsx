import React from "react";
import { ItemCar } from "../ItemCar";
import styles from "./styles.module.scss";

function ShopCar() {
  return (
    <div className={styles.shopCarWrapper}>
      <div className={styles.shopCarItens}>
        <ItemCar image="https://picsum.photos/200" name="X-SALADA" />
        <ItemCar image="https://picsum.photos/200" name="X-SALADA" />
        <ItemCar image="https://picsum.photos/200" name="X-SALADA" />
        <ItemCar image="https://picsum.photos/200" name="X-SALADA" />
      </div>
      <div className={styles.shopCarInformations}>
        <p className={styles.shopCarInformationsTotal}>TOTAL</p>
        <p className={styles.shopCarInformationsValue}>XX,XX</p>
      </div>
    </div>
  );
}

export { ShopCar };
