// Path: src/components/Nav.js
import { useContext } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { AppContext } from '../context/ThemeContext';
import styles from './Nav.module.css';

const Nav = () => {
  const { theme, toggleTheme, isMenuOpen, toggleMenu } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/assets/images/logo.webp"
          alt="Vexor portfolio logo"
          className={styles.logoImage}
          loading="lazy"
        />
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              My Services
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              My Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              spy={true}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <label className={styles.themeToggle}>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            aria-label="Toggle light or dark theme"
          />
          <span className={styles.slider}>
            {theme === 'light' ? (
              <FaSun className={styles.themeIcon} />
            ) : (
              <FaMoon className={styles.themeIcon} />
            )}
          </span>
        </label>

        <a
          href="https://github.com/brayobiz"
          aria-label="GitHub profile"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.socialIcon} />
        </a>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Nav;