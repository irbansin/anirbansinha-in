import { useEffect, useRef, useState } from "react";
import styles from "./Portfolio.module.scss";
import Banner from "../../components/Banner/Banner";
import { apiUrl } from "../../../config";
import Card from "../../components/Card/Card";

function Portfolio() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

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
    <div className={styles.container}>
      <section className={`${styles.banner} `}>
        <Banner
          title="Portfolio"
          subtitle="A collection of my projects, achievements and experiences."
        />
      </section>
      <section>
        <div className={styles.portfolioGrid}>
          {Array.isArray(projects) && projects.length > 0
            ? projects.map((item, i) => (
                <div className={styles.portfolioItem} key={i}>
                  {/* <a href={item.deploy_url} target="_blank">
                  <img src={item.screenshot_url}></img>
                </a> */}
                  <Card
                    title={item.name}
                    link={item.deploy_url}
                    image={item.screenshot_url}
                    width={"100%"}
                    height={"180px"}
                  />
                </div>
              ))
            : "No Projects Found"}
        </div>
      </section>
    </div>
  );
}
export default Portfolio;
