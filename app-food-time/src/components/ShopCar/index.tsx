import React, { useEffect, useState } from "react";
import { ItemCar } from "../ItemCar";
import styles from "./styles.module.scss";

interface Itens {
  image: string;
  name: string;
  price: number;
}

function ShopCar() {
  const [itens, setItens] = useState<Itens[]>([]);

  const addCar = () => {
    const newItem = {
      image: "https://picsum.photos/200",
      name: "X-SALADA",
      price: 12.5,
    };
    setItens([newItem, ...itens]);
    console.log("Adicionando...");
  };

  return (
    <div className={styles.shopCarWrapper}>
      {itens?.length ? (
        <>
          <div className={styles.shopCarItens}>
            {itens?.map((item, index) => {
              return (
                <ItemCar
                  key={index}
                  image="https://picsum.photos/200"
                  name="X-SALADA"
                  price={item?.price}
                />
              );
            })}
          </div>
          <div className={styles.shopCarInformations}>
            <p className={styles.shopCarInformationsTotal}>TOTAL</p>
            <p className={styles.shopCarInformationsValue}>XX,XX</p>
            <button onClick={() => addCar()}>Adicionar</button>
          </div>
        </>
      ) : (
        <>
          <p>Sem itens no carrinho</p>
          <button onClick={() => addCar()}>Adicionar</button>
        </>
      )}
    </div>
  );
}

export { ShopCar };
