import styles from './About.module.css';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className={styles.about} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.image} data-aos="zoom-in">
          <img
            src="/assets/images/profile.png"
            alt="Brian – Web & App Developer"
            className={styles.profileImage}
            loading="lazy"
          />
        </div>

        <div className={styles.textBlock}>
          <h2 data-aos="fade-up" data-aos-delay="100">Hi, I’m Brian</h2>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            I craft digital experiences that blend design, performance, and reliability.
          </p>

          <p className={styles.intro} data-aos="fade-up" data-aos-delay="300">
            I help individuals and businesses transform ideas into modern, fast, and visually engaging
            websites and mobile apps. My work focuses on creating interfaces that are both beautiful
            and effortless to use.
          </p>

          <p className={styles.intro} data-aos="fade-up" data-aos-delay="400">
            I specialize in <strong>React</strong>, <strong>Flutter</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
            <strong>Bootstrap</strong>, and <strong>Figma</strong> — the tools behind high-performance, scalable solutions.
          </p>

          <div className={styles.sections}>
            <div className={styles.card} data-aos="fade-up" data-aos-delay="500">
              <h3>What I Can Help You With</h3>
              <ul>
                <li>Responsive, modern websites for any device</li>
                <li>Front-end apps built with React, HTML, CSS & JavaScript</li>
                <li>Cross-platform mobile apps (Flutter for Android & iOS)</li>
                <li>UI/UX design and prototyping in Figma</li>
                <li>SEO & performance optimization</li>
              </ul>
            </div>

            <div className={styles.card} data-aos="fade-up" data-aos-delay="600">
              <h3>Why Work With Me</h3>
              <ul>
                <li>Clean, maintainable code that scales</li>
                <li>Balance between aesthetics and functionality</li>
                <li>Transparent communication & on-time delivery</li>
              </ul>
            </div>
          </div>

          <p className={styles.closing} data-aos="fade-up" data-aos-delay="700">
            Looking for a developer who treats your project like their own?
            <br />Let’s build something extraordinary together. 🚀
          </p>
          <a href="public/Brian_Kipkoech_Kangogo_CV.docx" download className={styles.cvButton}>
            <Download className={styles.icon} aria-hidden="true" />
            <span>Download CV</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;