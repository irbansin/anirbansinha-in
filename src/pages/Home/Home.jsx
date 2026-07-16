import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Banner from "../../components/Banner/Banner";
import { apiUrl } from "../../../config"




function Home() {
  const [tutorials, setTutorials] = useState([]);

  const [services, setServices] = useState([]);

  const [coreSkills, setCoreSkills] = useState([]);
  const [socials, setSocials] = useState([]);
  const [aboutParagraphs, setAboutParagraphs] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const [stats, setStats] = useState([]);
  const [calendarUrl, setCalendarUrl] = useState("");
  const [loading, setLoading] = useState(true); // Bring back loading state!

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/services"));
        const responseMessage = await res.json();
        setServices(responseMessage.message.servicesInfo);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/tutorials"));
        const responseMessage = await res.json();
        setTutorials(responseMessage.message.tutorialsInfo);
      } catch (err) {
        console.error("Failed to fetch tutorials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/skills"));
        const responseMessage = await res.json();
        setCoreSkills(responseMessage.message.skillsInfo);
      } catch (err) {
        console.error("Failed to fetch skills:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/socials"));
        const responseMessage = await res.json();
        setSocials(responseMessage.message.socialsInfo);
      } catch (err) {
        console.error("Failed to fetch socials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/about"));
        const responseMessage = await res.json();
        setAboutParagraphs(responseMessage.message.paragraphs);
      } catch (err) {
        console.error("Failed to fetch about text:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/hero"));
        const responseMessage = await res.json();
        setHeroData(responseMessage.message.heroInfo);
      } catch (err) {
        console.error("Failed to fetch hero details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/stats"));
        const responseMessage = await res.json();
        setStats(responseMessage.message.statsInfo);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/calendar"));
        const responseMessage = await res.json();
        setCalendarUrl(responseMessage.message.calendarUrl);
      } catch (err) {
        console.error("Failed to fetch calendar URL:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");

    // Mimic API submit, then trigger mailto
    setTimeout(() => {
      setFormStatus("success");
      const mailtoUrl = `mailto:reach@anirbansinha.in?subject=${encodeURIComponent(
        formData.subject || "Collaboration Inquiry"
      )}&body=${encodeURIComponent(
        `Hi Anirban,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      )}`;

      // Open default mail provider
      window.location.href = mailtoUrl;

      // Reset form fields
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className={styles.container}>
      {/* Hero Banner Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          <div className={styles.heroTextContent}>
            <Banner
              title={heroData?.title}
              subtitle={heroData?.subtitle}
            />
            {heroData?.intro && (
              <p className={styles.heroIntro}>
                {heroData.intro}
              </p>
            )}
            <div className={styles.heroCTAs}>
              <a href="#contact" className={styles.ctaPrimary}>
                Get in Touch
              </a>
              <a href="/resume" className={styles.ctaSecondary}>
                View Resume
              </a>
            </div>
          </div>
          {heroData?.avatarUrl && (
            <div className={styles.heroImageContainer}>
              <div className={styles.neonAvatarFrame}>
                <img
                  src={heroData.avatarUrl}
                  alt={heroData.title || "Avatar"}
                  className={styles.avatarImage}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Social Links Bar */}
      {socials && socials.length > 0 && (
        <section className={styles.socialLinks}>
          <div className={styles.socialInner}>
            {socials.map((soc, idx) => (
              <a
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.platform}
                key={idx}
              >
                <img src={soc.icon} alt={soc.platform} />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Core Competencies (Stats Grid) */}
      {stats && stats.length > 0 && (
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((st, idx) => (
              <div className={styles.statCard} key={idx}>
                <div className={styles.statNumber}>{st.value}</div>
                <div className={styles.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About Story & Skills Grid */}
      <section className={styles.aboutStorySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyBlock}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            {aboutParagraphs.map((para, idx) => (
              <p className={styles.storyText} key={idx}>
                {para}
              </p>
            ))}
          </div>
          <div className={styles.storySkillsBlock}>
            <h2 className={styles.sectionTitle}>Key Strengths</h2>
            <div className={styles.compactSkillsGrid}>
              {coreSkills.map((cat, idx) => (
                <div key={idx} className={styles.compactSkillCard}>
                  <h3 className={styles.compactSkillCategory}>{cat.category}</h3>
                  <div className={styles.compactSkillBadges}>
                    {cat.items.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.compactBadge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Guidance Bookings */}
      <section className={styles.connectSection}>
        <h2 className={styles.sectionTitle}>Knowledge Sharing & Mentorship</h2>
        <p className={styles.sectionSubtitle}>Book a 1-on-1 session directly on my calendar via Topmate.</p>
        <div className={styles.connectGrid}>
          {services.map((c, idx) => (
            <a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectCard}
            >
              <div className={styles.connectInner}>
                <div className={styles.connectTitle}>{c.title}</div>
                <div className={styles.connectDesc}>{c.desc}</div>
                <div className={styles.connectCTA}>Book on Topmate →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Calendar Schedule Section */}
      {calendarUrl && (
        <section className={styles.liveTutorials}>
          <h2 className={styles.sectionTitle}>Availability Calendar</h2>
          <p className={styles.sectionSubtitle}>View my weekly availability schedule for consultation calls.</p>
          <div className={styles.scheduleWrapper}>
            <iframe
              src={calendarUrl}
              className={styles.calendarIframe}
              title="Anirban Sinha Google Calendar"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      )}

      {/* Tutorials list */}
      <section className={styles.liveTutorials}>
        <h2 className={styles.sectionTitle}>Tutorial Series</h2>
        <p className={styles.sectionSubtitle}>Resources and guides on common tech stacks.</p>
        <div className={styles.tutorialsGrid}>
          {tutorials.map((tut, i) => (
            <a
              href={tut.link}
              key={i}
              className={styles.tutorialCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.tutImageWrapper}>
                <img src={tut.img} alt={tut.title} className={styles.tutImage} />
              </div>
              <div className={styles.tutTitle}>{tut.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Integrated Contact Form */}
      <section id="contact" className={styles.contactFormSection}>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        <p className={styles.sectionSubtitle}>Send a message to discuss opportunities or collaboration requests.</p>

        <div className={styles.formContainer}>
          {formStatus === "success" ? (
            <div className={styles.formSuccess}>
              <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <h3>Message Prepared!</h3>
              <p>Your mail client has been opened. If it didn't trigger automatically, feel free to write directly to <strong>reach@anirbansinha.in</strong>.</p>
              <button onClick={() => setFormStatus("idle")} className={styles.ctaPrimary}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Collaboration Opportunities"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                ></textarea>
              </div>

              {formStatus === "error" && (
                <div className={styles.formError}>
                  Please fill out all required fields (*).
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={styles.submitBtn}
              >
                {formStatus === "sending" ? "Preparing Mail..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
