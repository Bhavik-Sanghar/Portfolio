import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component
import '../Styles/Skills.css'; // Your CSS file for the Skills page

const Skills = () => {
  const skills = [
    {
      title: 'HTML',
      icon: 'path_to_html_icon', // Replace with actual icon path
      description: 'Proficient in writing semantic HTML5 markup.',
    },
    {
      title: 'CSS',
      icon: 'path_to_css_icon', // Replace with actual icon path
      description: 'Skilled in styling with CSS and CSS frameworks.',
    },
    // Add more skills here
    {
      title: 'JavaScript',
      icon: 'path_to_js_icon', // Replace with actual icon path
      description: 'Experienced in modern JavaScript and ES6+ features.',
    },
    {
      title: 'React',
      icon: 'path_to_react_icon', // Replace with actual icon path
      description: 'Proficient in building dynamic UIs with React.',
    },
    // Add more skills here
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            image={skill.icon}
            skillName={skill.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
