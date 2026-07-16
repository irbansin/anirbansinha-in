import styles from "./ResumePrintTemplate.module.scss";

function ResumePrintTemplate({ userDetails }) {
  if (!userDetails) return null;
  const info = userDetails;

  return (
    <div className={styles.pdfTemplate}>
      <div className={styles.pdfHeader}>
        <h1>{info.name || "Anirban Sinha"}</h1>
        <p className={styles.pdfJobTitle}>{info.jobTitle || "Software Development Engineer"}</p>
        <div className={styles.pdfContactInfo}>
          {info.phones && info.phones[0]} &bull; {info.city && `${info.city}, ${info.state}, ${info.country}`} &bull; <a href="mailto:reach@anirbansinha.in">reach@anirbansinha.in</a>
        </div>
        <div className={styles.pdfLinksRow}>
          {info.links && info.links.map((linkObject, i) => (
            <span key={i}>
              <a href={linkObject.link} target="_blank" rel="noopener noreferrer">
                {linkObject.linkText}
              </a>
              {i < info.links.length - 1 ? " | " : ""}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.pdfContent}>
        <div className={styles.pdfSection}>
          <h2 className={styles.pdfSectionTitle}>Summary</h2>
          <p className={styles.pdfSummary}>{info.summary}</p>
        </div>

        {info.professionalExperience && info.professionalExperience.length > 0 && (
          <div className={styles.pdfSection}>
            <h2 className={styles.pdfSectionTitle}>Work Experience</h2>
            <div className={styles.pdfExperienceList}>
              {info.professionalExperience.map((job, idx) => (
                <div className={styles.pdfJob} key={idx}>
                  <div className={styles.pdfJobHeader}>
                    <span className={styles.pdfJobTitleCompany}>
                      <strong>{job.role}</strong> &mdash; <span>{job.companyName}</span>
                    </span>
                    <span className={styles.pdfJobMeta}>
                      {job.dates} {job.location && `| ${job.location}`}
                    </span>
                  </div>
                  <ul className={styles.pdfJobResponsibilities}>
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {info.technicalSkills && (
          <div className={styles.pdfSection}>
            <h2 className={styles.pdfSectionTitle}>Technical Skills</h2>
            <div className={styles.pdfSkillsGrid}>
              {Object.entries(info.technicalSkills).map(([category, list], idx) => {
                const categoryTitle = category
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase());
                
                if (!Array.isArray(list) || list.length === 0) return null;
                return (
                  <div className={styles.pdfSkillCategory} key={idx}>
                    <strong>{categoryTitle}: </strong>
                    <span>{list.join(", ")}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {info.education && info.education.length > 0 && (
          <div className={styles.pdfSection}>
            <h2 className={styles.pdfSectionTitle}>Education</h2>
            <div className={styles.pdfEducationList}>
              {info.education.map((edu, i) => (
                <div className={styles.pdfEducationItem} key={i}>
                  <div className={styles.pdfEducationHeader}>
                    <span>
                      <strong>{edu.degree}</strong> &mdash; <span>{edu.institution}</span>
                    </span>
                    <span className={styles.pdfEduDates}>
                      {edu.startYear} – {edu.endYear || "Present"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {info.achievements && info.achievements.length > 0 && (
          <div className={styles.pdfSection}>
            <h2 className={styles.pdfSectionTitle}>Achievements</h2>
            <ul className={styles.pdfAchievementsList}>
              {info.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumePrintTemplate;
