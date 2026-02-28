import { useEffect, useRef } from "react";
import styles from "./Home.module.scss";

const tutorials = [
  {
    title: "HTML / CSS / JS",
    link: "https://www.topmate.io/irbansin/page/5mj05vdJKP",
    img: "https://www.freepnglogos.com/uploads/javascript-png/fix-html-css-javascript-for-website-logo-6.png",
  },
  {
    title: "NodeJS",
    link: "https://www.topmate.io/irbansin/page/x4odgj3oII",
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png",
  },
  {
    title: "ReactJS",
    link: "https://www.topmate.io/irbansin/page/t64YSDz5rj",
    img: "https://uploads.teachablecdn.com/attachments/SWtZL7dtR3SYRScauf7w_+1920x1357.jpg",
  },
  {
    title: "Angular",
    link: "https://www.topmate.io/irbansin/page/MctVtvBb34",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUxiY3CHfyGGgwhLRkBdKoEmb4lxIOgarRQ&s",
  },
];

function Home() {
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
        <h1 className={styles.title}>Anirban Sinha</h1>
        <p className={styles.subtitle}>
          Developer, teacher, writer. Learn with me through fun tutorials.
        </p>
      </section>

      <section className={`${styles.socialLinks} ${styles.reveal}`}>
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
          <a href="https://topmate.io/dashboard/profile" target="_blank" rel="noopener noreferrer" aria-label="Topmate">
            <img src="https://images.yourstory.com/cs/images/companies/topmateiologo-1707412608028.jpg" alt="Topmate" />
          </a>
        </div>
      </section>

      <section className={`${styles.liveTutorials} ${styles.reveal}`}>
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
