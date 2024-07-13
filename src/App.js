import React, { useState } from 'react';
import './App.css';

const content = [
  {
    title: 'Welcome to the BBS Style Website',
    text: `
    ==========================================
    |                                         |
    |          Welcome to the BBS             |
    |                                         |
    |  This is the home section. Navigate     |
    |  using the menu on the left.            |
    |                                         |
    ==========================================
    `,
  },
  {
    title: 'News',
    text: `
    ==========================================
    |                                         |
    |                News                     |
    |                                         |
    |  Latest updates and news.               |
    |                                         |
    |  - Update 1: New features added         |
    |  - Update 2: Bug fixes and improvements |
    |                                         |
    ==========================================
    `,
  },
  {
    title: 'Discussion',
    text: `
    ==========================================
    |                                         |
    |              Discussion                 |
    |                                         |
    |  Join the discussion forums.            |
    |                                         |
    |  - Topic 1: General Discussion          |
    |  - Topic 2: Technical Support           |
    |                                         |
    ==========================================
    `,
  },
  {
    title: 'Downloads',
    text: `
    ==========================================
    |                                         |
    |              Downloads                  |
    |                                         |
    |  Get the latest files and updates.      |
    |                                         |
    |  - File 1: Download link                |
    |  - File 2: Download link                |
    |                                         |
    ==========================================
    `,
  },
  {
    title: 'Games',
    text: `
    ==========================================
    |                                         |
    |                Games                    |
    |                                         |
    |  Play and download games.               |
    |                                         |
    |  - Game 1: Download link                |
    |  - Game 2: Download link                |
    |                                         |
    ==========================================
    `,
  },
  {
    title: 'Contact',
    text: `
    ==========================================
    |                                         |
    |               Contact                   |
    |                                         |
    |  Get in touch with us.                  |
    |                                         |
    |  - Email: contact@bbsstyle.com          |
    |  - Phone: (123) 456-7890                |
    |                                         |
    ==========================================
    `,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setCurrentIndex((currentIndex + 1) % content.length);
    } else if (event.key === 'ArrowUp') {
      setCurrentIndex((currentIndex - 1 + content.length) % content.length);
    }
  };

  return (
    <div className="container" onKeyDown={handleKeyDown} tabIndex="0">
      <header className="header">
        <h1>BBS Style Website</h1>
      </header>
      <nav className="nav">
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`nav-link ${currentIndex === index ? 'focused' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
              >
                {item.title.split(' ')[0]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main">
        <section className="section active" id="dynamic-content">
          <h2>{content[currentIndex].title}</h2>
          <pre>{content[currentIndex].text}</pre>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 BBS Style Website</p>
      </footer>
    </div>
  );
}

export default App;
