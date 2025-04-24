// Path: src/App.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (ms)
      once: true, // Animate only once
      mirror: false, // Don't animate out
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;