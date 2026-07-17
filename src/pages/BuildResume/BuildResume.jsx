import { useState, useEffect } from "react";
import styles from "./BuildResume.module.scss";
import Banner from "../../components/Banner/Banner";
import ProcessLoader from "../../components/ProcessLoader/ProcessLoader";
import { apiUrl } from "../../../config";

function BuildResume({ setOverrideUserDetails }) {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [generatedResume, setGeneratedResume] = useState(null);

  const loadingMessages = [
    "Connecting to LinkedIn secure gateway...",
    "Sending request headers and handshakes...",
    "Fetching profile page markup...",
    "Bypassing security checks & rendering HTML...",
    "Extracting structured JSON-LD schema data...",
    "Parsing profile owner metadata and address...",
    "Processing professional experience timeline...",
    "Compiling academic education history...",
    "Extracting core technical skills & proficiencies...",
    "Building your custom designer CV...",
  ];

  // If a resume is already generated, keep the override active when on this page
  useEffect(() => {
    if (generatedResume) {
      setOverrideUserDetails(generatedResume);
    } else {
      setOverrideUserDetails(null);
    }
    // Clean up when leaving the page
    return () => {
      setOverrideUserDetails(null);
    };
  }, [generatedResume, setOverrideUserDetails]);

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    setError("");

    const url = linkedinUrl.trim();
    if (!url) {
      setError("Please enter a LinkedIn profile link.");
      return;
    }

    // Basic LinkedIn URL check
    const isLinkedIn = /linkedin\.com\/in\//i.test(url) || /^[a-zA-Z0-9-._]+$/.test(url);
    if (!isLinkedIn) {
      setError("Please enter a valid LinkedIn URL (e.g., https://www.linkedin.com/in/username).");
      return;
    }

    // Start simulation
    setLoading(true);
    setLoadingStep(0);
  };

  // Trigger API call and run the loader steps
  useEffect(() => {
    if (!loading) return;

    let apiData = null;
    let apiError = null;
    let stepsFinished = false;

    // Trigger API call to AWS Lambda endpoint
    const fetchParsedData = async () => {
      try {
        const LAMBDA_URL = "https://your-api-id.execute-api.region.amazonaws.com/prod/parse-linkedin";
        
        // Uncomment below to actually hit your Lambda when it's ready:
        /*
        const res = await fetch(LAMBDA_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: linkedinUrl }),
        });
        if (!res.ok) {
          throw new Error("Failed to parse LinkedIn profile.");
        }
        const data = await res.json();
        apiData = data.userInfo; // adjust based on your lambda's response format
        */

        // DUMMY FLOW WITH FAKE API CALL & DATA (Simulating network delay)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        const dummyData = {
          name: "John Doe",
          jobTitle: "Senior AWS Architect",
          city: "Seattle",
          state: "WA",
          country: "USA",
          phones: ["+1 (555) 123-4567"],
          summary: "Experienced software engineer specializing in AWS Lambda and serverless architectures. Proven ability to build scalable backend services.",
          links: [
            { linkType: "linkedin", link: "https://linkedin.com/in/johndoe", linkText: "linkedin.com/in/johndoe", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
            { linkType: "github", link: "https://github.com/johndoe", linkText: "github.com/johndoe", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
            { linkType: "email", link: "mailto:john@example.com", linkText: "john@example.com", icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" }
          ],
          technicalSkills: {
            technicalLanguages: ["JavaScript", "TypeScript", "Python"],
            backendFrameworks: ["Node.js", "Serverless Framework"],
            Cloud: ["AWS Lambda", "API Gateway", "DynamoDB"],
            Others: ["Git", "CI/CD"]
          },
          professionalExperience: [
            {
              role: "Cloud Engineer",
              dates: "Jan 2022 - Present",
              location: "Seattle, WA",
              companyName: "Tech Corp",
              responsibilities: [
                "Architected and deployed serverless microservices using AWS Lambda and API Gateway.",
                "Optimized DynamoDB queries, reducing latency by 40%."
              ]
            }
          ],
          education: [
            {
              institution: "University of Washington",
              degree: "B.S. Computer Science",
              startYear: "2015",
              endYear: "2019"
            }
          ],
          achievements: [],
          certifications: ["AWS Certified Developer - Associate"]
        };
        
        apiData = dummyData;
      } catch (err) {
        apiError = err.message || "Something went wrong.";
      } finally {
        checkCompletion();
      }
    };

    fetchParsedData();

    // Run message interval
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          stepsFinished = true;
          checkCompletion();
          return prev;
        }
      });
    }, 300); // 3 seconds total animation

    const checkCompletion = () => {
      if (apiError) {
        setError(apiError);
        setLoading(false);
        clearInterval(interval);
      } else if (apiData && stepsFinished) {
        setGeneratedResume(apiData);
        setLoading(false);
        clearInterval(interval);
      }
    };

    return () => {
      clearInterval(interval);
    };
  }, [loading, linkedinUrl]);

  const handleDownload = () => {
    window.print();
  };

  const handleReset = () => {
    setGeneratedResume(null);
    setLinkedinUrl("");
  };

  return (
    <div className={styles.container}>
      {!generatedResume && !loading && (
        <section className={styles.heroSection}>
          <div className={styles.cardWrapper}>
            <div className={styles.glowBorder}></div>
            <div className={styles.formCard}>
              <h1 className={styles.title}>Build Your Own Resume</h1>
              <p className={styles.subtitle}>
                Transform your LinkedIn profile into a premium, printer-friendly PDF resume in seconds.
              </p>

              <form onSubmit={handleUrlSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    required
                    placeholder="Enter LinkedIn profile link or username..."
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className={styles.input}
                  />
                  <span className={styles.inputFocusHighlight}></span>
                </div>
                {error && <p className={styles.errorText}>{error}</p>}
                <button type="submit" className={styles.submitBtn}>
                  <span>Generate Resume</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.btnIcon}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {loading && (
        <ProcessLoader
          title="Parsing LinkedIn Markup"
          message={loadingMessages[Math.min(loadingStep, loadingMessages.length - 1)]}
          progress={(loadingStep / loadingMessages.length) * 100}
        />
      )}

      {generatedResume && (
        <div className={styles.previewContainer}>
          <div className={styles.actionBar}>
            <button onClick={handleReset} className={styles.backBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Build Another</span>
            </button>
            <button onClick={handleDownload} className={styles.downloadBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </button>
          </div>

          <div className={styles.resumePaper}>
            <section className={styles.bannerSection}>
              <Banner title={generatedResume.name} subtitle={generatedResume.jobTitle} centered />
            </section>

            {/* Contact details */}
            <section className={styles.contactCard}>
              <div className={styles.location}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{generatedResume.city}, {generatedResume.state}, {generatedResume.country}</span>
              </div>

              {generatedResume.phones && generatedResume.phones.length > 0 && (
                <div className={styles.phones}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {generatedResume.phones.map((num, i) => (
                    <span key={i}>
                      <a href={`tel:${String(num).replace(/\s+/g, "")}`}>{num}</a>
                      {i < generatedResume.phones.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </div>
              )}

              {generatedResume.links && generatedResume.links.length > 0 && (
                <div className={styles.links}>
                  {generatedResume.links.map((linkObject, i) => (
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
                          e.target.style.display = "none";
                        }}
                      />
                      <span>{linkObject.linkText}</span>
                    </a>
                  ))}
                </div>
              )}
            </section>

            {/* Summary */}
            <section className={styles.resumeSection}>
              <h2 className={styles.sectionHeader}>Summary</h2>
              <div className={styles.glassBlock}>
                <p className={styles.summaryText}>{generatedResume.summary}</p>
              </div>
            </section>

            {/* Technical Skills */}
            {generatedResume.technicalSkills && (
              <section className={styles.resumeSection}>
                <h2 className={styles.sectionHeader}>Technical Skills</h2>
                <div className={styles.skillsGrid}>
                  {Object.entries(generatedResume.technicalSkills).map(([category, list], idx) => {
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

            {/* Experience */}
            {generatedResume.professionalExperience && generatedResume.professionalExperience.length > 0 && (
              <section className={styles.resumeSection}>
                <h2 className={styles.sectionHeader}>Professional Experience</h2>
                <div className={styles.timeline}>
                  {generatedResume.professionalExperience.map((job, idx) => (
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

            {/* Education */}
            {generatedResume.education && generatedResume.education.length > 0 && (
              <section className={styles.resumeSection}>
                <h2 className={styles.sectionHeader}>Education</h2>
                <div className={styles.educationGrid}>
                  {generatedResume.education.map((edu, i) => (
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

            {/* Achievements */}
            {generatedResume.achievements && generatedResume.achievements.length > 0 && (
              <section className={styles.resumeSection}>
                <h2 className={styles.sectionHeader}>Achievements & Recognition</h2>
                <div className={styles.glassBlock}>
                  <ul className={styles.achievementsList}>
                    {generatedResume.achievements.map((achievement, i) => (
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
        </div>
      )}
    </div>
  );
}

export default BuildResume;
