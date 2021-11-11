import React from "react";
import styles from "./styles.module.scss";

function Snack() {
  return (
    <div className={styles.SnackWrapper}>
      <div className={styles.SnackImage}>
        <img src="https://picsum.photos/200" alt="imagem do lanche" />
      </div>
      <div className={styles.SnackDetails}>
        <p className={styles.SnackDetailsName}>NOME DO LANCHE</p>
        <p className={styles.SnackDetailsPrice}>XX,XX</p>
      </div>
      <div>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export { Snack };
