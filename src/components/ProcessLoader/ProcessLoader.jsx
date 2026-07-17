import styles from "./ProcessLoader.module.scss";

function ProcessLoader({ title, message, progress }) {
  return (
    <section className={styles.loaderSection}>
      <div className={styles.loaderCard}>
        <div className={styles.scannerWrapper}>
          <div className={styles.scannerLine}></div>
          <div className={styles.loadingSpinner}></div>
        </div>
        <h2 className={styles.loaderTitle}>{title}</h2>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={styles.loaderStepMessage}>{message}</p>
      </div>
    </section>
  );
}

export default ProcessLoader;
