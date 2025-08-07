import React from 'react';
import './Skills.css';

const Skills = () => {
  const languages = [
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      level: 85
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 80
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 90
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 85
    },
    {
      name: 'Express',
      icon: 'https://ih1.redbubble.net/image.438908244.6144/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg',
      level: 85
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 88
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      level: 75
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      level: 80
    }
  ];

  const tools = [
    {
      name: 'Visual Studio Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      name: 'Visual Studio',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg'
    },
    {
      name: 'Postman',
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
    },
    {
      name: 'Eclipse',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg'
    }
  ];

  return (
    <div className="skills">
      <div className="section">
        <div className="container">
          <h1 className="section-title fade-in">My Skills</h1>
          
          <div className="skills-intro fade-in">
            <p>
              I'm passionate about learning and mastering new technologies. Here are the 
              languages, frameworks, and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="skills-section">
            <h2 className="skills-category-title">Languages & Technologies</h2>
            <div className="skills-grid">
              {languages.map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2 className="skills-category-title">Tools I Use</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={tool.name} className="tool-card" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="tool-icon">
                    <img src={tool.icon} alt={tool.name} />
                  </div>
                  <h3 className="tool-name">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <h3>Always Learning</h3>
              <p>
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends and best practices. I regularly explore new frameworks, attend online courses, 
                and work on personal projects to expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;