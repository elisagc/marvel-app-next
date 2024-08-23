"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Loader.module.css";

export const Loader = () => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById("loader-portal");
    setPortalRoot(root);
  }, []);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.progress}>
      <div className={styles["progress-value"]}></div>
    </div>,
    portalRoot
  );
};
