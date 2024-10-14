import React, { useState } from 'react';
import About from './components/About';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Toxonomy';
import Challenges from './components/Challenges';
import Members from './components/Members';
import References from './components/References';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after scrolling
  };

  return (
    <div className="App">
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`menu-bar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('literature')}>Literature Review</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('toxonomy')}>Toxonomy</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('challenges')}>Challenges & Open Issues</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('members')}>Group Members</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('references')}>References</button>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="literature">
          <LiteratureReview />
        </section>
        <section id="toxonomy">
          <Taxonomy />
        </section>
        <section id="challenges">
          <Challenges />
        </section>
        <section id="members">
          <Members />
        </section>
        <section id="references">
          <References />
        </section>
      </div>
    </div>
  );
}

export default App;
