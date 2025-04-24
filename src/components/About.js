// Path: src/components/About.js
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about} data-aos="fade-up">
      <div className={styles.image} data-aos="zoom-in">
        <img
          src="/assets/images/profile.png"
          alt="Profile illustration"
          className={styles.profileImage}
          loading="lazy"
        />
      </div>
      <h2 data-aos="zoom-in">About Me</h2>
      <div className={styles.content}>
        <div className={styles.text} data-aos="fade-up" data-aos-delay="100">
          <p>
            Hi, I’m Brian, a passionate web developer with a knack for creating delightful, user-friendly experiences. My journey in tech started with a love for problem-solving, and now I specialize in building responsive, futuristic websites with a touch of magic.
          </p>
          <p>
            I’m skilled in React, HTML/CSS, and UI/UX design, with a keen eye for detail (perfect for bug fixing and email template creation!). When I’m not coding, you can find me exploring new tech, dreaming up cute designs, or working on project.
          </p>
          <h3>Skills</h3>
          <ul className={styles.skills}>
            <li data-aos="fade-up" data-aos-delay="200">Frontend: React, HTML, CSS, JavaScript</li>
            <li data-aos="fade-up" data-aos-delay="300">Backend: Django, Firebase</li>
            <li data-aos="fade-up" data-aos-delay="400">Design: UI/UX, Figma</li>
            <li data-aos="fade-up" data-aos-delay="500">Other: Bug Fixing, Email Templates</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;