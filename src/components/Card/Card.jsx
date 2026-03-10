import styles from "./Card.module.scss";
function goToProjectLink(link) {
  window.open(link, "_blank", "noopener,noreferrer");
}
function Card({ title, subtitle, image, link, width, height, boxShadow }) {
  const imageBgStyle = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: width,
        height: height,
        borderRadius: "8px",
      }
    : {
        backgroundImage: `url(https://l450v.alamy.com/450v/2cb8rhj/connection-error-landing-page-vector-template-homepage-warning-message-interface-layout-with-flat-vector-illustrations-website-under-construction-work-in-progress-web-banner-cartoon-concept-2cb8rhj.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: width,
        height: height,
        borderRadius: "8px",
      };
  const cardStyle = {
    boxShadow: boxShadow,
  };
  return (
    <div onClick={() => goToProjectLink(link)}>
      <div className={styles.card} style={cardStyle}>
        <div style={imageBgStyle}></div>
        <div>
          {title ? <p className={styles.title}>{title}</p> : ""}
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : ""}
        </div>
      </div>
    </div>
  );
}

export default Card;
