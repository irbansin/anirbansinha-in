import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import Banner from "../../components/Banner/Banner";
import { apiUrl } from "../../../config";
import Card from "../../components/Card/Card";
import ProcessLoader from "../../components/ProcessLoader/ProcessLoader";

// Helper to format raw netlify project names
function formatProjectName(name) {
  if (!name) return "";
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Helper to extract relevant technology tags from names and domains
function getProjectTags(name) {
  const tags = [];
  const lowercase = name.toLowerCase();
  
  if (lowercase.includes("react")) tags.push("React");
  if (lowercase.includes("angular")) tags.push("Angular");
  if (lowercase.includes("node") || lowercase.includes("be") || lowercase.includes("server")) tags.push("Node.js");
  if (lowercase.includes("html") || lowercase.includes("css") || lowercase.includes("js")) tags.push("HTML/CSS/JS");
  if (lowercase.includes("special") || lowercase.includes("restaurant") || lowercase.includes("bridge")) tags.push("Restaurant App");
  if (lowercase.includes("api")) tags.push("REST API");
  if (lowercase.includes("fastfood") || lowercase.includes("food")) tags.push("E-Commerce");
  
  if (tags.length === 0) {
    tags.push("Web Project");
  }
  return tags;
}

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    "Connecting to Netlify...",
    "Fetching active deployments...",
    "Validating deployment status...",
    "Building portfolio grid...",
  ];

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [loading]);

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
        // Sort projects so recent/main deployments show first
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.bannerSection}>
        <Banner title="My Creations" subtitle="A curation of live applications and active projects" />
      </section>
      
      <section className={styles.portfolioSection}>
        {loading ? (
          <ProcessLoader
            title="Retrieving Projects"
            message={loadingMessages[Math.min(loadingStep, loadingMessages.length - 1)]}
            progress={Math.max(15, (loadingStep / loadingMessages.length) * 100)}
          />
        ) : error ? (
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>⚠️ Failed to load dynamic portfolio: {error}</p>
            <p className={styles.errorSubtext}>Please verify that the backend API is running locally.</p>
          </div>
        ) : (
          <div className={styles.portfolioGrid}>
            {projects.map((item, i) => {
              const formattedTitle = formatProjectName(item.name);
              const tags = getProjectTags(item.name);
              const secureLink = item.ssl_url || item.url || item.deploy_url;
              return (
                <div className={styles.portfolioItem} key={i}>
                  <Card
                    title={formattedTitle}
                    link={secureLink}
                    image={item.screenshot_url}
                    tags={tags}
                    subtitle={`Live deployment of ${formattedTitle}.`}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Portfolio;
