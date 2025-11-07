import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import blogData from "../data/blogData.json";
import styles from "../components/Blog.module.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.find((item) => item.id === id);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll back to blog section
  const handleBack = () => {
    navigate("/#blog");
    setTimeout(() => {
      const blogSection = document.getElementById("blog");
      if (blogSection) blogSection.scrollIntoView({ behavior: "smooth" });
    }, 300); // Wait for navigation before scrolling
  };

  if (!post) {
    return (
      <div className={styles.blogDetail}>
        <div className={styles.container}>
          <h2>Post not found</h2>
          <button onClick={handleBack} className={styles.backButton}>
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.blogDetail}>
      {/* Scroll progress bar */}
      <div
        className={styles.scrollBar}
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className={styles.container} data-aos="fade-up">
        {/* Blog Header Section */}
        <div className={styles.heroSection}>
          <img
            src={`/${post.thumbnail}`}
            alt={post.title}
            className={styles.detailThumbnail}
            loading="lazy"
          />
          <div className={styles.overlay}></div>
          <div className={styles.heroText}>
            <h1 className={styles.detailTitle}>{post.title}</h1>
            <p className={styles.detailDate}>{post.date}</p>
          </div>
        </div>

        {/* Blog Body */}
        <article className={styles.detailBody}>
          <p className={styles.detailContent}>{post.content}</p>
        </article>

        {/* Back Button */}
        <div className={styles.backButtonWrapper}>
          <button onClick={handleBack} className={styles.backButton}>
            ← Back to Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;