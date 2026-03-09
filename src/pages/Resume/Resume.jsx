import { apiUrl } from "../../../config";

import styles from "./Resume.module.scss";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";

function Resume() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/resume-details"));
        const responseMessage = await res.json();
        setUserDetails(responseMessage.message.userInfo);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <Banner title={userDetails.name} subtitle={userDetails.jobTitle} />
      </section>

      <section className={styles.contact}>
        <p>
          Bengaluru, Karnataka, India
          <br />
          Mobile: 94824&nbsp;10312 / 87594&nbsp;71790 <br />
          <a href="mailto:reach@anirbansinha.in">reach@anirbansinha.in</a> |
          <a
            href="https://github.com/irbansin"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/irbansin
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/irbansin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn.com/in/irbansin
          </a>{" "}
          | Website:{" "}
          <a
            href="https://anirbansinha.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            anirbansinha.in
          </a>
        </p>
      </section>

      <section className={styles.summary}>
        <h2>Summary</h2>
        <p>
          Experienced Software Engineer specializing in JavaScript, Angular,
          React, Node.js, Java. Passionate about building scalable,
          high-performance applications with a strong focus on frontend and
          backend development. Proven ability to lead teams, mentor developers,
          and deliver impactful solutions.
        </p>
      </section>

      <section className={styles.skills}>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Java,
            Python
          </li>
          <li>
            <strong>Frontend:</strong> Angular, React, NextJS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, ExpressJS, Spring, Spring Boot
          </li>
          <li>
            <strong>ORM:</strong> Prisma, Hibernate
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL, MongoDB, DynamoDB, Redis
          </li>
          <li>
            <strong>Cloud:</strong> AWS (Lambda, S3, CloudFront)
          </li>
          <li>
            <strong>Testing:</strong> Jest, Jasmine, Karma, JUnit
          </li>
          <li>
            <strong>Others:</strong> Microservices, REST APIs, Agile, Git,
            Monorepo
          </li>
        </ul>
      </section>

      <section className={styles.experience}>
        <h2>Professional Experience</h2>
        <div className={styles.job}>
          <h3>Ivy – Senior Software Development Engineer</h3>
          <span className={styles.dates}>
            Apr 2024 – May 2025 | Pune, India
          </span>
          <ul>
            <li>
              <strong>Project 1:</strong> Platform for VIP Customers for online
              Casino Application. Developed module for enabling “VIP” customers
              to get better deals in an online Casino Application using Angular,
              NxCloud, RxJS; mentored junior developers.
            </li>
            <li>
              <strong>Project 2:</strong> Data Migration – made production DB
              ready for new VIP field (MongoDB, OracleDB).
            </li>
            <li>
              <strong>Project 3:</strong> Backend API development with Spring
              Boot, OracleDB, Kafka.
            </li>
          </ul>
        </div>
        <div className={styles.job}>
          <h3>EPAM Systems – Senior Software Development Engineer</h3>
          <span className={styles.dates}>
            Feb 2023 – Apr 2024 | Hyderabad, India
          </span>
          <ul>
            <li>
              Led development of customer acquisition platform for a
              digital-first bank (Angular front end, Java backend).
            </li>
            <li>
              Built an AI chatbot for resolving HR queries; React front end,
              NodeJS back end with Langchain.
            </li>
          </ul>
        </div>
        <div className={styles.job}>
          <h3>Synechron – Technical Lead</h3>
          <span className={styles.dates}>Jul 2022 – Dec 2022</span>
          <ul>
            <li>
              <strong>Project 1:</strong> RBAC system for internal employees.
              Served as Frontend Technical Lead for React applications of a
              major bank; drove architecture and implementation decisions for
              role-based access control features.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3>EasyEat – Technical Lead</h3>
          <span className={styles.dates}>Jan 2022 – Jul 2022</span>
          <ul>
            <li>
              <strong>Project 1:</strong> Central Menu Management System (CMM)
              for Restaurant Partner Application — Angular, Node.js, AWS.
            </li>
            <li>
              <strong>Project 2:</strong> Led Internationalization of Restaurant
              Partner Application to support multiple languages — Angular,
              Node.js, AWS, Lokalize.
            </li>
            <li>
              <strong>Project 3:</strong> Maintenance of User Food Ordering app
              — React, NextJS.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3>Maximl – Senior Software Development Engineer</h3>
          <span className={styles.dates}>
            Mar 2021 – Jan 2022 | Chennai, India
          </span>
          <ul>
            <li>
              <strong>Project 1:</strong> Jobs Module for Connected Workers
              Platform — responsible for listing, tracking and reporting
              progress on daily jobs of factory workers. Technologies: Angular,
              Ionic Framework, microfrontend (singleSPA), TailwindCSS.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3>eReinsure – Software Engineer</h3>
          <span className={styles.dates}>
            Oct 2019 – Mar 2021 | Hyderabad, India
          </span>
          <ul>
            <li>
              <strong>Project 1:</strong> Negotiation Platform for Reinsurers —
              built a negotiation platform for risk assurers and cedents. Tech:
              Angular, Material UI.
            </li>
            <li>
              <strong>Project 2:</strong> Filing Cabinet for Reinsurers —
              archive storage for negotiation records. Tech: Angular, Material
              UI, RxJS, NgRx.
            </li>
            <li>
              <strong>Project 3:</strong> Backend API development — Spring Boot.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3>Tata Consultancy Services – System Engineer</h3>
          <span className={styles.dates}>Oct 2017 – Oct 2019</span>
          <ul>
            <li>
              <strong>Project 1:</strong> CRM frontend leveraging MS Dynamics
              API — developed CRM application for internal bank employees using
              React and MS Dynamics API.
            </li>
            <li>
              Improved website performance by 70% by implementing SSR and
              reducing bundle size by eliminating third party libraries.
            </li>
          </ul>
        </div>
      </section>

      <section className={`${styles.education} ${styles.reveal}`}>
        <h2>Education</h2>
        <ul>
          <li>
            Indian Institute of Technology, Jodhpur – MTech, Data Engineering
            and Artificial Intelligence (2024–2026)
          </li>
          <li>
            Asansol Engineering College – BTech, Computer Engineering
            (2013–2017)
          </li>
        </ul>
      </section>

      <section className={`${styles.certifications} ${styles.reveal}`}>
        <h2>Certifications & Achievements</h2>
        <ul>
          <li>TCS "On The Spot" Award</li>
          <li>Global Student Entrepreneurship Finalist</li>
          <li>Tata First Dot Top 25 Startups</li>
        </ul>
      </section>
    </div>
  );
}
export default Resume;
