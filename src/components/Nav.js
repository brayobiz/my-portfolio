import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Nav.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);

      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`${styles.navbar} 
        ${scrolled ? styles.scrolled : ""} 
        ${hidden ? styles.hidden : ""}`}
      role="banner"
    >
      <nav className={styles.navContainer} role="navigation" aria-label="Main">
        <div className={styles.logo}>Vexor</div>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          id="primary-navigation"
          className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.to} className={styles.navItem}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={closeMenu}
                tabIndex={0}
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}