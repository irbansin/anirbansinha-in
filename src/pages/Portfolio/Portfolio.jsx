import { useEffect, useRef, useState } from "react";
import styles from "./Portfolio.module.scss";
import Banner from "../../components/Banner/Banner";
import { apiUrl } from "../../../config";

function Portfolio() {
  const containerRef = useRef(null);
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl("/api/v1/projects"), {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

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
