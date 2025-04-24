// Path: src/components/Testimonials.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

// Placeholder star icon (you can replace with an actual icon library like react-icons)
const Star = () => <span>★</span>;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      profilePic: '/assets/images/sarah-johnson.jpg', // Image from public/assets/images
      rating: 5,
      review: 'Working with Brian was a delight! They built our restaurant reservation app with a stunning galaxy theme. The attention to detail and creativity were outstanding!',
    },
    {
      name: 'Michael Chen',
      profilePic: '/assets/images/michael-chen.jpg', // Image from public/assets/images
      rating: 5,
      review: 'An amazing developer! Brian helped us with KU Hub, and the app was flawless. Their UI/UX skills made the platform a joy to use for students.',
    },
    {
      name: 'Emily Davis',
      profilePic: '/assets/images/emily-davis.jpg', // Image from public/assets/images
      rating: 4,
      review: 'Brian fixed bugs in our web app faster than we thought possible. The email templates they designed were both functional and beautiful!',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials} data-aos="fade-up">
      <div className={styles.header}>
        <h2 data-aos="zoom-in">What My Clients Say</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Here’s what some of my past clients have to say about working with me.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className={styles.swiper}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.testimonialCard}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <img
                src={testimonial.profilePic}
                alt={`${testimonial.name}'s profile`}
                className={styles.profilePic}
              />
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className={styles.review}>{testimonial.review}</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;