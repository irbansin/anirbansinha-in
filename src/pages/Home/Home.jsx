import { useState } from "react";
import styles from "./Home.module.scss";
import Banner from "../../components/Banner/Banner";

const tutorials = [
  {
    title: "HTML / CSS / JS",
    link: "https://github.com/irbansin",
    img: "https://www.freepnglogos.com/uploads/javascript-png/fix-html-css-javascript-for-website-logo-6.png",
  },
  {
    title: "NodeJS",
    link: "https://github.com/irbansin",
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png",
  },
  {
    title: "ReactJS",
    link: "https://github.com/irbansin",
    img: "https://uploads.teachablecdn.com/attachments/SWtZL7dtR3SYRScauf7w_+1920x1357.jpg",
  },
  {
    title: "Angular",
    link: "https://github.com/irbansin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUxiY3CHfyGGgwhLRkBdKoEmb4lxIOgarRQ&s",
  },
];

const connects = [
  {
    title: "Free Students' Guidance",
    link: "https://topmate.io/irbansin/1984813?utm_source=public_profile&utm_campaign=irbansin",
    desc: "15 min consultation for students and fresh grads.",
  },
  {
    title: "Technical Guidance Session",
    link: "https://topmate.io/irbansin/1982515?utm_source=public_profile&utm_campaign=irbansin",
    desc: "1-on-1 strategy call about software engineering.",
  },
  {
    title: "Quick TXT",
    link: "https://topmate.io/irbansin/1982637/pay?utm_source=public_profile&utm_campaign=irbansin",
    desc: "Got a quick question? Ping me directly.",
  },
  {
    title: "Chai break : Career & Strategy",
    link: "https://topmate.io/irbansin/1982486?utm_source=public_profile&utm_campaign=irbansin",
    desc: "Friendly casual chat on career roadmap.",
  },
  {
    title: "Resume & Profile Audit",
    link: "https://topmate.io/irbansin/1982508?utm_source=public_profile&utm_campaign=irbansin",
    desc: "Complete review of LinkedIn and Resume.",
  },
  {
    title: "Mock Interview Lite",
    link: "https://topmate.io/irbansin/1982517?utm_source=public_profile&utm_campaign=irbansin",
    desc: "30-min interview practice with real-time feedback.",
  },
];

const coreSkills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Angular", "Next.js", "Node.js", "Express", "Spring Boot"],
  },
  {
    category: "Databases & ORMs",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Prisma", "Hibernate"],
  },
  {
    category: "Cloud & Devops",
    items: ["AWS (Lambda, S3, CloudFront)", "GCP", "Docker", "Git", "Nx Monorepo"],
  },
];

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error

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
              title="Anirban Sinha"
              subtitle="Senior Software Engineer | Mentor | Content Creator"
            />
            <p className={styles.heroIntro}>
              Specializing in full-stack architectures using Node.js, React, Angular, and cloud setups. 
              Currently pursuing my MTech in Data Engineering & AI at IIT Jodhpur. 
              I design and build resilient web systems.
            </p>
            <div className={styles.heroCTAs}>
              <a href="#contact" className={styles.ctaPrimary}>
                Get in Touch
              </a>
              <a href="/resume" className={styles.ctaSecondary}>
                View Resume
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.neonAvatarFrame}>
              <img
                src="https://avatars.githubusercontent.com/u/97022463?v=4"
                alt="Anirban Sinha"
                className={styles.avatarImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Bar */}
      <section className={styles.socialLinks}>
        <div className={styles.socialInner}>
          <a href="https://www.linkedin.com/in/irbansin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="LinkedIn" />
          </a>
          <a href="https://x.com/irbansin" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="X" />
          </a>
          <a href="https://github.com/irbansin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="GitHub" />
          </a>
          <a href="https://instagram.com/irbansin" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" />
          </a>
          <a href="https://medium.com/@irbansin" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968906.png" alt="Medium" />
          </a>
          <a href="https://dev.to/irbansin" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
            <img src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="Dev.to" />
          </a>
          <a href="https://anirbansinha.notion.site/a0bcc45fa11c47fb99ab7d24dadecd49?v=5519d501ffd74921b9903e65dad4691b" target="_blank" rel="noopener noreferrer" aria-label="Notion Blog">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion Blog" />
          </a>
          <a href="https://topmate.io/irbansin" target="_blank" rel="noopener noreferrer" aria-label="Topmate">
            <img src="https://images.yourstory.com/cs/images/companies/topmateiologo-1707412608028.jpg" alt="Topmate" />
          </a>
        </div>
      </section>

      {/* Core Competencies (Stats Grid) */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>9+</div>
            <div className={styles.statLabel}>Years Industry Experience</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>IIT</div>
            <div className={styles.statLabel}>MTech Data Eng & AI</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Students Guided</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Open Deployments</div>
          </div>
        </div>
      </section>

      {/* About Story & Skills Grid */}
      <section className={styles.aboutStorySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyBlock}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.storyText}>
              I'm Anirban, a passionate software engineer with extensive experience in the tech industry. 
              My journey spans leadership roles at startups and global digital consulting firms alike. 
              I specialize in frontend and backend systems, leading teams to deliver modular architectures 
              and robust APIs.
            </p>
            <p className={styles.storyText}>
              Beyond engineering, I enjoy researching AI models, writing tech articles on Medium/Dev.to, 
              and mentoring students. I regularly consult on profile audits, career roadmaps, and mock interviews.
            </p>
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
          {connects.map((c, idx) => (
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
      <section className={styles.liveTutorials}>
        <h2 className={styles.sectionTitle}>Availability Calendar</h2>
        <p className={styles.sectionSubtitle}>View my weekly availability schedule for consultation calls.</p>
        <div className={styles.scheduleWrapper}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&mode=WEEK&title=Anirban's%20Calendar&src=YW5pLmV4cG8xMEBnbWFpbC5jb20&src=Y2xhc3Nyb29tMTA1NDU4NjgxNjM3MjQ1ODQ0NjIyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1NjgyOTE4NjY5MDc2NjE1NjM4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmFtaWx5MDE4MzI3NTY1NDIzNzE5NDQwMTZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=M3Q4NjgxM2Rib2lyMGhpb3FzbjY0Nm51dTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2xhc3Nyb29tMTA4MDAyOTgxMTc0NTczNTM0MTI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE1NTcyMzMxNjg4NDYxODM5MDkwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxNDQ0Mjg2OTQ3MTQyNzI5MDM2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=N2Y4ZjJmYmZiYzA1N2Y5M2QyMGQ4ZTcwYTViZGNlMWEwZWY0NTE1ZjQzNzliNDEwMWJiMTQ5MDk1ZDU2MDgxOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cDFhdTFxMWJodDI1aWxkYm5qdDdidXQwbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dGNxMm9oZzNmY3VoZDFwdnJlZGw3NW0xOHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230088ff&color=%23795548&color=%2383d754&color=%23f4511e&color=%237cb342&color=%23ac7f5e&color=%23e67c73&color=%23b39ddb&color=%23f09300&color=%23919191&color=%238e24aa"
            className={styles.calendarIframe}
            title="Anirban Sinha Google Calendar"
            loading="lazy"
          ></iframe>
        </div>
      </section>

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
