// Path: src/components/Blog.js
import styles from './Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building a Restaurant Reservation App with a Galaxy Theme',
      excerpt: 'In this post, I share my journey of creating the Delix Restaurant app, a futuristic reservation platform with a galaxy-inspired design using React and Firebase.',
      thumbnail: 'assets/images/delix-1.jpg', // Placeholder image
      date: 'April 15, 2025',
      link: '#', // Placeholder link (update with actual blog post URL)
    },
    {
      title: 'How I Optimized KU Hub for Kenyatta University Students',
      excerpt: 'Learn how I built KU Hub, a student portal, using Django and Firebase, focusing on performance optimization and user experience.',
      thumbnail: 'assets/images/kuhub-thumbnail.jpg',
      date: 'March 10, 2025',
      link: '#',
    },
    {
      title: 'Tips for Creating Stunning Email Templates',
      excerpt: 'Discover my top tips for designing email templates that are both functional and visually appealing, with a focus on responsiveness and user engagement.',
      thumbnail: 'assets/images/email-thumbnail.jpg',
      date: 'February 20, 2025',
      link: '#',
    },
  ];

  return (
    <section id="blog" className={styles.blog} data-aos="fade-up">
      <div className={styles.header}>
        <h2 data-aos="zoom-in">My Blog</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Check out my latest blog posts where I share insights, tutorials, and project breakdowns.
        </p>
      </div>
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={styles.blogCard}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            <img
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              className={styles.thumbnail}
            />
            <div className={styles.cardContent}>
              <span className={styles.date}>{post.date}</span>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <a href={post.link} className={styles.readMore}>
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;