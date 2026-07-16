import styles from "./FloatingDownload.module.scss";

function FloatingDownload({ userDetails }) {
  // If resume data hasn't loaded yet, don't display the button
  if (!userDetails) return null;

  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      className={styles.floatingButton}
      onClick={handleDownload}
      aria-label="Download Resume PDF"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.icon}
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span className={styles.text}>Download CV</span>
    </button>
  );
}

export default FloatingDownload;
