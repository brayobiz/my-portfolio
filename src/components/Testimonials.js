import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Olivia Martinez',
      title: 'Founder, Bloom Studio',
      profilePic: '/assets/images/olivia.jpg',
      rating: 5,
      review:
        "Brian transformed our vision into a stunning website that perfectly captures our brand. The attention to detail and smooth animations make our site feel alive — it’s beyond what we imagined.",
    },
    {
      name: 'Ethan Walker',
      title: 'Product Manager, NovaTech',
      profilePic: '/assets/images/ethan.jpg',
      rating: 5,
      review:
        "Collaborating with Brian was effortless. His ability to translate complex product goals into elegant user interfaces is rare. Our platform now feels faster, cleaner, and more intuitive.",
    },
    {
      name: 'Sophia Kim',
      title: 'Creative Director, Horizon Agency',
      profilePic: '/assets/images/sophia.jpg',
      rating: 5,
      review:
        "From Figma prototypes to the final build, Brian was meticulous and creative. The Flutter app he delivered is pixel-perfect and performs beautifully across devices.",
    },
    {
      name: 'Liam Parker',
      title: 'CEO, Stellar Solutions',
      profilePic: '/assets/images/liam.jpg',
      rating: 4,
      review:
        "Reliable, responsive, and truly invested in the project’s success. Brian’s combination of technical skill and design sensibility elevated our online presence in ways that really impressed our clients.",
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials} data-aos="fade-up">
      <div className={styles.header}>
        <h2 data-aos="zoom-in">What My Clients Say</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Genuine words from people and teams I’ve had the privilege to build with.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className={styles.swiper}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card} data-aos="fade-up" data-aos-delay={150 + index * 100}>
              <div className={styles.profile}>
                <img
                  src={testimonial.profilePic}
                  alt={`${testimonial.name}'s portrait`}
                  className={styles.avatar}
                  loading="lazy"
                />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p className={styles.title}>{testimonial.title}</p>
                </div>
              </div>

              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                ))}
              </div>

              <p className={styles.review}>{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;