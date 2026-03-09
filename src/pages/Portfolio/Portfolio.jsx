import { useEffect, useRef } from "react";
import styles from "./Portfolio.module.scss";
import Banner from "../../components/Banner/Banner";

function Portfolio() {
  const containerRef = useRef(null);

  useEffect(() => {
    const opts = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, opts);

    const elems = containerRef.current.querySelectorAll(`.${styles.reveal}`);
    elems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <section className={`${styles.banner} ${styles.reveal}`}>
        <Banner
          title="Portfolio"
          subtitle="A collection of my projects, achievements and experiences."
        />
      </section>
    </div>
  );
}
export default Portfolio;
