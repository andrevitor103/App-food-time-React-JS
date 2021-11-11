import React from "react";
import styles from "./styles.module.scss";
import { Snack } from "../Snack";

function SnackList() {
  return (
    <div className={styles.SnackListWrapper}>
      <Snack image="https://picsum.photos/200" name="X salada" price={12.2} />
      <Snack image="https://picsum.photos/200" name="X salada" price={12.2} />
      <Snack image="https://picsum.photos/200" name="X salada" price={12.2} />
      <Snack image="https://picsum.photos/200" name="X salada" price={12.2} />
    </div>
  );
}

export { SnackList };
