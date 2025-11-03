// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <img
        src="/assets/images/hero-bg.jpg"
        alt=""
        className={styles.heroBg}
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* TITLE — SLOW, ELEGANT TYPING */}
        <motion.h1 className={styles.title}>
          <div className={styles.titleWrapper}>
            <TypeAnimation
              sequence={[
                'Hi — I’m Brian Kangogo.',
                4000,
                '',
                1200,
                'Hi — I’m Brian Kangogo.',
                4000,
              ]}
              speed={30}
              deleteSpeed={50}
              repeat={Infinity}
              cursor={true}
              wrapper="span"
              className={styles.typingText}
            />
          </div>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          I build high-converting React websites & interfaces for startups and small businesses.
        </motion.p>

        {/* CTA BUTTONS — ATTENTION-GRABBING */}
        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {/* VIEW MY WORK — BOUNCING ARROW */}
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className={styles.btnPrimary}
            aria-label="View Brian's projects"
          >
            <span>View My Work</span>
            <motion.span
              className={styles.arrow}
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>

          {/* HIRE ME — PULSE + BADGE + TOOLTIP */}
          <a href="#contact" className={styles.btnSecondary} aria-label="Book free consult">
            <span>Hire Me — Free 15-min consult</span>
            <div className={styles.badge}>Most Booked</div>

            <motion.span
              className={styles.tooltip}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileHover={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              No commitment · Just value
            </motion.span>
          </a>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
        >
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;