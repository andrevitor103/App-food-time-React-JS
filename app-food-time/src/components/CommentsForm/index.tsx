import React from "react";
import styles from "./styles.module.scss";

function CommentForm() {
  return (
    <div className={styles.CommentFormWrapper}>
      <form className={styles.CommentForm}>
        <div className={styles.commentFormComment}>
          <textarea
            name="comment"
            id="comment"
            cols={80}
            rows={10}
            placeholder="adicionar comentário..."
          />
        </div>
        <button>Comentar</button>
      </form>
    </div>
  );
}

export { CommentForm };
