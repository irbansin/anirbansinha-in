import { apiUrl } from "../../../config";
import styles from "./Resume.module.scss";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

function Resume() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/resume-details"));
        const responseMessage = await res.json();
        setUserDetails(responseMessage.message.userInfo);
      } catch (err) {
        console.error("Failed to fetch resume details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <SkeletonLoader lines={1} height="80px" width="100%" className={styles.bannerSkeleton} />
        <SkeletonLoader lines={3} height="30px" width="80%" />
        <SkeletonLoader lines={5} height="150px" width="90%" />
      </div>
    );
  }

  const info = userDetails || {};

  return (
    <div className={styles.container}>
      <section className={styles.bannerSection}>
        <Banner title={info.name || "Anirban Sinha"} subtitle={info.jobTitle || "Software Engineer"} />
      </section>

      {/* Contact information Grid */}
      <section className={styles.contactCard}>
        <div className={styles.location}>
          <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>
            {info.city && `${info.city}, `}
            {info.state && `${info.state}, `}
            {info.country}
          </span>
        </div>

        {info.phones && info.phones.length > 0 && (
          <div className={styles.phones}>
            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {info.phones.map((num, i) => (
              <span key={i}>
                <a href={`tel:${String(num).replace(/\s+/g, "")}`}>{num}</a>
                {i < info.phones.length - 1 ? " | " : ""}
              </span>
            ))}
          </div>
        )}

        {info.links && info.links.length > 0 && (
          <div className={styles.links}>
            {info.links.map((linkObject, i) => (
              <a
                href={linkObject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
                key={i}
              >
                <img
                  src={linkObject.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.linkIcon}
                  onError={(e) => {
                    // Fallback to simple circle if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
                <span>{linkObject.linkText}</span>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Professional Summary */}
      <section className={styles.resumeSection}>
        <h2 className={styles.sectionHeader}>Summary</h2>
        <div className={styles.glassBlock}>
          <p className={styles.summaryText}>{info.summary}</p>
        </div>
      </section>

      {/* Technical Skills Grid */}
      {info.technicalSkills && (
        <section className={styles.resumeSection}>
          <h2 className={styles.sectionHeader}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {Object.entries(info.technicalSkills).map(([category, list], idx) => {
              // Convert camelCase to Title Case with Space
              const categoryTitle = category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
                
              if (!Array.isArray(list) || list.length === 0) return null;
              
              return (
                <div className={styles.skillCard} key={idx}>
                  <h3 className={styles.skillCategoryTitle}>{categoryTitle}</h3>
                  <div className={styles.skillBadgeList}>
                    {list.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.skillBadge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Experience Timeline */}
      {info.professionalExperience && info.professionalExperience.length > 0 && (
        <section className={styles.resumeSection}>
          <h2 className={styles.sectionHeader}>Professional Experience</h2>
          <div className={styles.timeline}>
            {info.professionalExperience.map((job, idx) => (
              <div className={styles.timelineItem} key={idx}>
                <div className={styles.timelineBadge} />
                <div className={styles.timelineContent}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.role}</h3>
                      <h4 className={styles.companyName}>{job.companyName}</h4>
                    </div>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobDates}>{job.dates}</span>
                      {job.location && <span className={styles.jobLocation}>📍 {job.location}</span>}
                    </div>
                  </div>
                  <ul className={styles.jobResponsibilities}>
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Grid */}
      {info.education && info.education.length > 0 && (
        <section className={styles.resumeSection}>
          <h2 className={styles.sectionHeader}>Education</h2>
          <div className={styles.educationGrid}>
            {info.education.map((edu, i) => (
              <div className={styles.educationCard} key={i}>
                <h3 className={styles.degreeTitle}>{edu.degree}</h3>
                <h4 className={styles.institutionName}>{edu.institution}</h4>
                <span className={styles.studyPeriod}>
                  🎓 {edu.startYear} – {edu.endYear || "Present"}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Achievements */}
      {info.achievements && info.achievements.length > 0 && (
        <section className={styles.resumeSection}>
          <h2 className={styles.sectionHeader}>Achievements & Recognition</h2>
          <div className={styles.glassBlock}>
            <ul className={styles.achievementsList}>
              {info.achievements.map((achievement, i) => (
                <li key={i} className={styles.achievementItem}>
                  <svg className={styles.achievementIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

export default Resume;
