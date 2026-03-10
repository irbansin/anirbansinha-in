import React from "react";
import styles from "./InkLoader.module.scss";

export default function InkLoader({ size = 120 }) {
  const style = { width: size, height: size };
  return (
    <div
      className={styles.inkLoader}
      style={style}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className={styles.drop} />
      ))}
    </div>
  );
}
