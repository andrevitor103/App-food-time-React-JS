import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ISnack, Snack } from "../Snack";

function SnackList() {
  const snacksList = [
    {
      image: "https://picsum.photos/200",
      name: "X salada",
      price: 12.2,
      ingredients: "Pão, hamburguer, salada e queijo",
    },
    {
      image: "https://picsum.photos/200",
      name: "X salada",
      price: 12.2,
      ingredients: "Pão, hamburguer, salada e queijo",
    },
    {
      image: "https://picsum.photos/200",
      name: "X salada",
      price: 12.2,
      ingredients: "Pão, hamburguer, salada e queijo",
    },
    {
      image: "https://picsum.photos/200",
      name: "X salada",
      price: 12.2,
      ingredients: "Pão, hamburguer, salada e queijo",
    },
  ];
  const [snacks, setSnacks] = useState<ISnack[]>([]);

  useEffect(() => {
    setSnacks(snacksList);
  }, []);

  return (
    <div className={styles.SnackListWrapper}>
      {snacks?.map((snack) => {
        return (
          <Snack
            image={snack.image}
            name={snack.name}
            price={snack.price}
            ingredients={snack.ingredients}
          />
        );
      })}
    </div>
  );
}

export { SnackList };
