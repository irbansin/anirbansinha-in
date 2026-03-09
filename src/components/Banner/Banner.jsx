import styles from "./Banner.module.scss";

function Banner({ title, subtitle }) {
  return (
    <div className="banner">
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default Banner;
