import styles from "./Card.module.scss";

function Card({ title, subtitle, image, link, tags = [] }) {
  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const imageSrc = image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={title || "Project Screenshot"} className={styles.cardImage} loading="lazy" />
        <div className={styles.overlay}>
          <span className={styles.ctaText}>Launch Project →</span>
        </div>
      </div>
      
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tagBadge}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
