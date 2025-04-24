// Path: src/components/Hero.js
import styles from './Hero.module.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className={styles.hero} data-aos="fade-up">
      <img
        src="/assets/images/hero-bg.jpg"
        alt="Hero background"
        className={styles.heroBg}
        loading="lazy"
      />
      <div className={styles.content} data-aos="zoom-in" data-aos-delay="100">
        <h1>Brian K.</h1>
        <p>Front-End Developer & UI/UX Enthusiast Based in Kenya</p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={styles.cta}
        >
          Explore My Work
        </Link>
      </div>
    </div>
  );
};

export default Hero;