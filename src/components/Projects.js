import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.card} data-aos="fade-up">
      {!isLoaded && <div className={styles.skeleton} />}
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className={`${styles.thumbnail} ${!isLoaded ? styles.hiddenImg : ''}`}
        onLoad={() => setIsLoaded(true)}
      />

      <div className={styles.cardBody}>
        <h3>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.techStack}>
          {project.tech.map((t, i) => (
            <span key={i} className={styles.techTag}>{t}</span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaExternalLinkAlt /> Live
          </a>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (swiperReady && swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperReady]);

  const featuredProjects = [
    {
      img: '/assets/images/delix-thumbnail.jpg',
      title: 'Delix Restaurant App',
      desc: 'AI-powered restaurant booking and menu recommendation platform.',
      tech: ['React', 'Django', 'Tailwind', 'PostgreSQL'],
      link: 'https://delixrestaurant.vercel.app',
      repo: 'https://github.com/username/delix',
    },
    {
      img: '/assets/images/kuhub1.png',
      title: 'KU Hub',
      desc: 'University platform for student-faculty collaboration and services.',
      tech: ['Next.js', 'Firebase', 'TypeScript', 'Chakra UI'],
      link: 'https://kuhub.example.com',
      repo: 'https://github.com/username/kuhub',
    },
    {
      img: '/assets/images/portfolio-thumbnail.jpeg',
      title: 'Portfolio Website',
      desc: 'Personal portfolio with modern design and animations.',
      tech: ['React', 'Vite', 'Framer Motion', 'CSS Modules'],
      link: 'https://portfolio.example.com',
      repo: 'https://github.com/username/portfolio',
    },
  ];

  return (
    <section id="projects" className={styles.projects} data-aos="fade-up">
      <h2 data-aos="zoom-in">My Projects</h2>

      {/* === FEATURED PROJECTS CAROUSEL === */}
      <div className={styles.sliderWrapper}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          onInit={() => setSwiperReady(true)}
          spaceBetween={32}
          slidesPerView={1}
          loop
          speed={700}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: styles.paginationBullet,
            bulletActiveClass: styles.paginationBulletActive,
          }}
          className={styles.swiper}
        >
          {featuredProjects.map((p, i) => (
            <SwiperSlide key={i}>
              <ProjectCard project={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={prevRef} className={styles.navPrev}>
          <FaChevronLeft />
        </button>
        <button ref={nextRef} className={styles.navNext}>
          <FaChevronRight />
        </button>

        <div className={`custom-pagination ${styles.customPagination}`} />
      </div>
    </section>
  );
};

export default Projects;