// Path: src/pages/Home.js
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;