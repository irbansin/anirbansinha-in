import { useEffect } from "react";
import styles from "./Home.module.scss";
import Banner from "../../components/Banner/Banner";

const tutorials = [
  {
    title: "HTML / CSS / JS",
    link: "/service-pages/html-css-js/html-css-js.html",
    img: "https://www.freepnglogos.com/uploads/javascript-png/fix-html-css-javascript-for-website-logo-6.png",
  },
  {
    title: "NodeJS",
    link: "/service-pages/nodejs/nodejs.html",
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png",
  },
  {
    title: "ReactJS",
    link: "/service-pages/react/react.html",
    img: "https://uploads.teachablecdn.com/attachments/SWtZL7dtR3SYRScauf7w_+1920x1357.jpg",
  },
  {
    title: "Angular",
    link: "/service-pages/angular/angular.html",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUxiY3CHfyGGgwhLRkBdKoEmb4lxIOgarRQ&s",
  },
];

const connects = [
  {
    title: "Free Students' Guidance",
    link: "https://topmate.io/irbansin/1984813?utm_source=public_profile&utm_campaign=irbansin",
  },
  {
    title: "Technical Guidance Session",
    link: "https://topmate.io/irbansin/1982515?utm_source=public_profile&utm_campaign=irbansin",
  },
  {
    title: "Quick TXT",
    link: "https://topmate.io/irbansin/1982637/pay?utm_source=public_profile&utm_campaign=irbansin",
  },

  {
    title: "Chai break : Career & Strategy",
    link: "https://topmate.io/irbansin/1982486?utm_source=public_profile&utm_campaign=irbansin",
  },
  {
    title: "Resume & Profile Audit",
    link: "https://topmate.io/irbansin/1982508?utm_source=public_profile&utm_campaign=irbansin",
  },
  {
    title: "Mock Interview Lite",
    link: "https://topmate.io/irbansin/1982517?utm_source=public_profile&utm_campaign=irbansin",
  },
];

function Home() {
  return (
    <div className={styles.container}>
      <section className={`${styles.banner}`}>
        <Banner
          title="Anirban Sinha"
          subtitle="Engineer | Mentor | Content Creator"
        />
      </section>
      <section className={`${styles.aboutSection}`}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I'm Anirban, a passionate software engineer with over 9 years of
          experience in the tech industry. I specialize in web development and
          have a strong background in JavaScript, TypeScript, Node.js, Angular,
          and React. I love sharing my knowledge through mentoring and content
          creation, helping others grow in their tech careers. When I'm not
          coding, you can find me exploring new technologies or enjoying a good
          book.
        </p>
      </section>
      <section className={`${styles.hireMeSection}`}>
        <h2 className={styles.sectionTitle}>Hire Me</h2>
        <p className={styles.hireMeText}>
          I'm currently open to new opportunities and collaborations. If you're
          looking for a dedicated and experienced software engineer to join your
          team or work on a project, feel free to reach out. I'm excited to
          bring my skills and passion for technology to new challenges and make
          a positive impact.
        </p>
        <a
          href="https://calendar.app.google/z2ygBfvxoaCyfhwNA"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hireMeLink}
        >
          Lets talk business →
        </a>
      </section>
      <section className={`${styles.connectSection}`}>
        <h2 className={styles.sectionTitle}>I love sharing knowledge</h2>
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
                <div className={styles.connectCTA}>Book on Topmate →</div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className={`${styles.liveTutorials}`}>
        <h2 className={styles.sectionTitle}>Schedule</h2>
        <div className={styles.schedule}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&mode=WEEK&title=Anirban's%20Calendar&src=YW5pLmV4cG8xMEBnbWFpbC5jb20&src=Y2xhc3Nyb29tMTA1NDU4NjgxNjM3MjQ1ODQ0NjIyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1NjgyOTE4NjY5MDc2NjE1NjM4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmFtaWx5MDE4MzI3NTY1NDIzNzE5NDQwMTZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2xhc3Nyb29tMTAxNDQ0Mjg2OTQ3MTQyNzI5MDM2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=M3Q4NjgxM2Rib2lyMGhpb3FzbjY0Nm51dTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2xhc3Nyb29tMTA4MDAyOTgxMTc0NTczNTM0MTI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE1NTcyMzMxNjg4NDYxODM5MDkwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=N2Y4ZjJmYmZiYzA1N2Y5M2QyMGQ4ZTcwYTViZGNlMWEwZWY0NTE1ZjQzNzliNDEwMWJiMTQ5MDk1ZDU2MDgxOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cDFhdTFxMWJodDI1aWxkYm5qdDdidXQwbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dGNxMm9oZzNmY3VoZDFwdnJlZGw3NW0xOHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23711a76&color=%23795548&color=%23616161&color=%23f4511e&color=%23b39ddb&color=%237cb342&color=%237cb342&color=%23e67c73&color=%23f09300&color=%23b39ddb&color=%238e24aa"
            width="800"
            height="600"
          ></iframe>
        </div>
      </section>
      <section className={`${styles.socialLinks}`}>
        <div className={styles.socialInner}>
          <a
            href="https://www.linkedin.com/in/irbansin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://x.com/irbansin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="X"
            />
          </a>
          <a
            href="https://github.com/irbansin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://instagram.com/irbansin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://medium.com/@irbansin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968906.png"
              alt="Medium"
            />
          </a>
          <a
            href="https://dev.to/irbansin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dev"
          >
            <img
              src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="Dev.to"
            />
          </a>
          <a href="mailto:reach@anirbansinha.in" aria-label="Email">
            <img
              src="https://cdn-icons-png.flaticon.com/128/561/561127.png"
              alt="Email"
            />
          </a>
          <a
            href="https://topmate.io/dashboard/profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Topmate"
          >
            <img
              src="https://images.yourstory.com/cs/images/companies/topmateiologo-1707412608028.jpg"
              alt="Topmate"
            />
          </a>
        </div>
      </section>

      <section className={`${styles.liveTutorials}`}>
        <h2 className={styles.sectionTitle}>Live Tutorials</h2>
        <div className={styles.tutorials}>
          {tutorials.map((tut, i) => (
            <a
              href={tut.link}
              key={i}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tut.img} alt={tut.title} />
              <div className={styles.cardTitle}>{tut.title}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
