import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, children }) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.headingWrapper}>
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
