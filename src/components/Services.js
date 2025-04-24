// Path: src/components/Services.js
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'I create responsive, futuristic websites with a touch of magic, like my Delix Restaurant app, inspired by a galaxy theme. Skilled in React, HTML/CSS, and JavaScript.',
      icon: '🌐', // Placeholder icon (replace with an actual icon/image later)
    },
    {
      title: 'UI/UX Design',
      description: 'I design user-friendly interfaces with a keen eye for detail, using tools like Figma to craft delightful experiences that users love.',
      icon: '🎨',
    },
    {
      title: 'Backend Development',
      description: 'I build robust backends with Django and Firebase, ensuring your applications are secure, scalable, and efficient—like KU Hub for Kenyatta University students.',
      icon: '⚙️',
    },
    {
      title: 'Bug Fixing & Optimization',
      description: 'I specialize in debugging and optimizing web applications, ensuring they run smoothly and efficiently, with a knack for email template creation.',
      icon: '🐞',
    },
  ];

  return (
    <section id="services" className={styles.services} data-aos="fade-up">
      <div className={styles.header}>
        <h2 data-aos="zoom-in">My Services</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Here’s what I can do for you—let’s bring your ideas to life!
        </p>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceCard}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;