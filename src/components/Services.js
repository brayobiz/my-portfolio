import { Code, Smartphone, Palette, Rocket } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Building fast, responsive, and visually stunning websites using React, HTML, CSS, and JavaScript — designed to look perfect on every device.',
      icon: <Code />,
    },
    {
      title: 'Mobile App Development',
      description:
        'Developing cross-platform mobile apps with Flutter — one codebase for both Android and iOS with high performance and elegant UI.',
      icon: <Smartphone />,
    },
    {
      title: 'UI/UX Design',
      description:
        'Designing intuitive and visually engaging interfaces in Figma — ensuring every interaction feels natural and purposeful.',
      icon: <Palette />,
    },
    {
      title: 'Optimization & Maintenance',
      description:
        'Improving speed, SEO, and scalability. From debugging to performance tuning, I ensure your site runs flawlessly.',
      icon: <Rocket />,
    },
  ];

  return (
    <section id="services" className={styles.services} data-aos="fade-up">
      <div className={styles.container}>
        <h2 data-aos="fade-up" data-aos-delay="100">
          My Services
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
          Turning your ideas into smooth, high-performing digital experiences.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;