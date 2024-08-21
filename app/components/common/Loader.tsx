"use client";

import { FC } from "react";
import styles from "./Loader.module.css"; // Importa los estilos

export const Loader: FC = () => {
  return (
    <div className={styles.progress}>
      <div className={styles["progress-value"]}></div>
    </div>
  );
};
