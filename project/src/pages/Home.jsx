import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-text">
              <h1 className="hero-title">
                I am <span className="highlight">Mustafa Zahoor</span> — a Software Engineering Student.
              </h1>
              <p className="hero-subtitle">
                I specialize in building web applications using modern tools and technologies.
              </p>
              <p className="hero-description">
                Passionate about creating innovative digital solutions that make a difference. 
                I combine technical expertise with creative problem-solving to build applications 
                that users love. Currently pursuing my degree in Software Engineering while 
                working on exciting projects that challenge me to grow as a developer.
              </p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <Link to="/about" className="btn btn-primary">
                  Explore More
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="floating-card">
                <div className="card-content">
                  <div className="code-snippet">
                    <div className="code-line">
                      <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                    </div>
                    <div className="code-line indent">
                      <span className="property">name</span>: <span className="string">'Mustafa Zahoor'</span>,
                    </div>
                    <div className="code-line indent">
                      <span className="property">role</span>: <span className="string">'Software Engineer'</span>,
                    </div>
                    <div className="code-line indent">
                      <span className="property">passion</span>: <span className="string">'Web Development'</span>
                    </div>
                    <div className="code-line indent">
                      <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'MongoDB'</span>],
                    </div>
                    <div className="code-line indent">
                      <span className="property">status</span>: <span className="string">'Available for opportunities'</span>
                    </div>
                    <div className="code-line">
                      {'}'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section section">
        <div className="container">
          <div className="intro-content">
            <h2>Building Digital Experiences</h2>
            <p>
              As a passionate software engineering student, I focus on creating modern, 
              responsive web applications that solve real-world problems. I enjoy working 
              with cutting-edge technologies and continuously learning new skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;