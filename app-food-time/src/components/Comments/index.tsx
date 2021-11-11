import React from "react";
import styles from "./styles.module.scss";

interface Comment {
  message: string;
  username: string;
  userImage?: string;
  star: number;
}

function Comment({ message, username, userImage, star }: Comment) {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentImage}>
        <img src={userImage} alt={`comentário do ${username}`} />
      </div>
      <div className={styles.commentInformation}>
        <div className={styles.commentUsername}>
          <p>{username}</p>
        </div>
        <div className={styles.commentMessage}>
          <p>{message}</p>
        </div>
        <div>
          <p>{star}</p>
        </div>
      </div>
    </div>
  );
}

export { Comment };
