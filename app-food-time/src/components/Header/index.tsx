import React from "react";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src="https://picsum.photos/200"
          alt="Hamburguer"
        />
      </div>
      <div className={styles.nameWrapper}>
        <p className={styles.name}>NOME DO LOCAL</p>
      </div>
      <div className={styles.socialNetworksWrapper}>
        <div className={styles.socialNetworksSingle}>
          <p className={styles.socialNetworksIcon}>Icon</p>
          <p className={styles.socialNetworksName}>Redes sociais</p>
        </div>
        <div className={styles.socialNetworksSingle}>
          <p className={styles.socialNetworksIcon}>Icon</p>
          <p className={styles.socialNetworksName}>Redes sociais</p>
        </div>
      </div>
      <div className={styles.informations}>
        <p className={styles.informationsContact}>CONTATOS: (XX) XXXXX-XXXX</p>
        <p className={styles.informationsAdress}>
          Rua XV de Setembro, nº 12, Centro
        </p>
      </div>
    </div>
  );
}

export { Header };
