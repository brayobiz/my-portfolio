// Path: src/components/Nav.js
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import styles from './Nav.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isToggling, setIsToggling] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const toggleTheme = () => {
    setIsToggling(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Toggling theme to:', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

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
              onClick={toggleMenu} // Close menu on click
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
              onClick={toggleMenu} // Close menu on click
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
              onClick={toggleMenu} // Close menu on click
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
              onClick={toggleMenu} // Close menu on click
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
              onClick={toggleMenu} // Close menu on click
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
              onClick={toggleMenu} // Close menu on click
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
              onClick={toggleMenu} // Close menu on click
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <label className={`${styles.themeToggle} ${isToggling ? styles.toggling : ''}`}>
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
        >
          <FaGithub className={styles.socialIcon} />
        </a>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Nav;