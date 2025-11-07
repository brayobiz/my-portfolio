import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import blogData from "../data/blogData.json";

const Blog = () => {
  return (
    <section id="blog" className={styles.blog} data-aos="fade-up">
      <div className={styles.header}>
        <h2 data-aos="zoom-in">My Blog</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Check out my latest posts where I share insights, tutorials, and project breakdowns.
        </p>
      </div>

      <div className={styles.blogGrid}>
        {blogData.map((post, index) => (
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
              loading="lazy"
            />
            <div className={styles.cardContent}>
              <span className={styles.date}>{post.date}</span>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;