import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import styles from "./Banner.module.scss";

function Banner({ title, subtitle }) {
  return (
    <div className={styles.Banner}>
      {" "}
      <div className={styles.title}>
        {title ? <span>{title}</span> : <SkeletonLoader height={"50px"} />}{" "}
      </div>
      <div className={styles.subtitle}>
        {subtitle ? <div>{subtitle}</div> : <SkeletonLoader />}
      </div>
    </div>
  );
}

export default Banner;
