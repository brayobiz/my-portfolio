// Path: src/components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className={styles.footer} data-aos="fade-up">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Navigate</h3>
            <ul className={styles.navList}>
              <li><a href="#home" className={styles.navLink}>Home</a></li>
              <li><a href="#projects" className={styles.navLink}>Projects</a></li>
              <li><a href="#about" className={styles.navLink}>About</a></li>
              <li><a href="#services" className={styles.navLink}>Services</a></li>
              <li><a href="#testimonials" className={styles.navLink}>Testimonials</a></li>
              <li><a href="#blog" className={styles.navLink}>My Blog</a></li>
              <li><a href="#contact" className={styles.navLink}>Contact Me</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Follow Me</h3>
            <div className={styles.socialGrid}>
              <a
                href="https://facebook.com/Vexor Prime"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg
                  className={styles.socialIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/BrianK818"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="X"
              >
                <svg
                  className={styles.socialIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/Brian Kangogo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg
                  className={styles.socialIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Address</h3>
            <p className={styles.address}>
              00100, Moi Avenue<br />
              Nairobi City, Kenya
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
            <p>© 2025 <span>Vexor</span>. All rights reserved.</p>
            <p>Designed & Built by <span>Brian Kangogo</span></p>
        </div>
      </footer>
      <button
        onClick={handleBackToTop}
        className={styles.backToTop}
        aria-label="Back to Top"
      >
        <svg
          className={styles.backToTopIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
};

export default Footer;