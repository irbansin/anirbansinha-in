import React from "react";
import styles from "./SkeletonLoader.module.scss";

export default function SkeletonLoader({
  lines = 1,
  lineHeight = 20,
  lineGap = 10,
  width = "30%",
  height,
  circle = false,
  className = "",
}) {
  const items = Array.from({ length: lines });
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width }}
      aria-hidden="true"
    >
      {items.map((_, i) => (
        <div
          key={i}
          className={styles.line}
          style={{
            height: height || `${lineHeight}px`,
            marginBottom: i === items.length - 1 ? 0 : `${lineGap}px`,
            borderRadius: circle ? "50%" : "4px",
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}
