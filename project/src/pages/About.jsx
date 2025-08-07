import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="section">
        <div className="container">
          <div className="about-content fade-in">
            <div className="about-text">
              <h1 className="section-title">About Me</h1>
              <div className="bio">
                <p>
                  Hello! I'm Mustafa Zahoor, a passionate software engineering student with a deep 
                  love for creating digital solutions that make a difference. My journey in 
                  programming began with curiosity and has evolved into a dedicated pursuit of 
                  excellence in web development.
                </p>
                <p>
                  I believe in writing clean, efficient code and creating user experiences that 
                  are both functional and delightful. My approach combines technical expertise 
                  with creative problem-solving to build applications that users love.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with fellow developers. I'm always 
                  eager to learn and grow in this ever-evolving field.
                </p>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="profile-card">
                <div className="profile-info">
                  <h3>Mustafa Zahoor</h3>
                  <p>Software Engineering Student</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">1+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section section">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Software Engineering Student</h3>
                <p className="timeline-date">2022 - Present</p>
                <p>
                  Currently pursuing my degree in Software Engineering, focusing on modern 
                  web technologies and software development practices.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Web Development Journey</h3>
                <p className="timeline-date">2023 - Present</p>
                <p>
                  Started specializing in full-stack web development, mastering technologies 
                  like React, Node.js, and modern database systems.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>First Programming Experience</h3>
                <p className="timeline-date">2022</p>
                <p>
                  Began my programming journey with C++ and Java, building a strong foundation 
                  in computer science fundamentals and problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section section">
        <div className="container">
          <h2 className="section-title">What Drives Me</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                I'm passionate about exploring new technologies and finding creative 
                solutions to complex problems.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality</h3>
              <p>
                I believe in writing clean, maintainable code and creating products 
                that stand the test of time.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                I enjoy working with others, sharing knowledge, and learning from 
                the developer community.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Learning</h3>
              <p>
                I'm committed to continuous learning and staying updated with the 
                latest industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;