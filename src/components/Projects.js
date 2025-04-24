// Path: src/components/Projects.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Projects.module.css';

const Projects = () => {
  const handleNavigationClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Stop event bubbling
  };

  const handleSwiperTouch = (swiper, event) => {
    if (event && event.preventDefault) {
      event.preventDefault(); // Prevent default touch behavior (e.g., overscroll)
    }
    if (event && event.stopPropagation) {
      event.stopPropagation(); // Stop event bubbling
    }
  };

  return (
    <section id="projects" className={styles.projects} data-aos="fade-up">
      <h2 data-aos="zoom-in">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          onClick: handleNavigationClick, // Handle arrow clicks
        }}
        pagination={{ clickable: true }}
        onTouchStart={handleSwiperTouch} // Handle swipe start
        onTouchMove={handleSwiperTouch} // Handle swipe move
        onTouchEnd={handleSwiperTouch} // Handle swipe end
        className={styles.swiper}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {/* Delix Restaurant App */}
        <SwiperSlide>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <img
              src="/assets/images/delix-thumbnail.jpg"
              alt="Delix Restaurant App thumbnail"
              className={styles.thumbnail}
              loading="lazy"
            />
            <h3>Delix Restaurant App</h3>
            <p>Futuristic reservation app built with React and Django.</p>
            <a href="https://delixrestaurant.vercel.app" className={styles.link}>
              View Live
            </a>
          </div>
        </SwiperSlide>
        {/* KU Hub */}
        <SwiperSlide>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
            <img
              src="/assets/images/kuhub1.png"
              alt="KU Hub platform thumbnail"
              className={styles.thumbnail}
              loading="lazy"
            />
            <h3>KU Hub</h3>
            <p>University platform for student services, built with Next.js and Firebase.</p>
            <a href="https://kuhub.example.com" className={styles.link}>
              View Live
            </a>
          </div>
        </SwiperSlide>
        {/* Portfolio Website */}
        <SwiperSlide>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
            <img
              src="/assets/images/portfolio-thumbnail.jpeg"
              alt="Portfolio website thumbnail"
              className={styles.thumbnail}
              loading="lazy"
            />
            <h3>Portfolio Website</h3>
            <p>Personal portfolio showcasing projects, built with React and Vite.</p>
            <a href="https://portfolio.example.com" className={styles.link}>
              View Live
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;