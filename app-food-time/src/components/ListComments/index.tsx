import React from "react";
import { Comment } from "../Comments";
import styles from "./styles.module.scss";

function ListComments() {
  return (
    <div className={styles.listCommentWrapper}>
      <Comment
        message="melhor atendimento da cidade"
        star={4}
        username="andrevitor103"
        userImage="https://picsum.photos/200"
      />
      <Comment
        message="melhor atendimento da cidade"
        star={4}
        username="andrevitor103"
        userImage="https://picsum.photos/200"
      />
      <Comment
        message="melhor atendimento da cidade"
        star={4}
        username="andrevitor103"
        userImage="https://picsum.photos/200"
      />
      <Comment
        message="melhor atendimento da cidade"
        star={4}
        username="andrevitor103"
        userImage="https://picsum.photos/200"
      />
    </div>
  );
}

export { ListComments };
