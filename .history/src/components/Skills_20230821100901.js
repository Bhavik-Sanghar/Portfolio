import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component
import '../Styles/Skills.css'; // Your CSS file for the Skills page

const Skills = () => {
  const skills = [
    {
      title: 'HTML',
      icon : 'data:image/png;base64,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',
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
    {
        title: 'React',
        icon: 'path_to_react_icon', // Replace with actual icon path
        description: 'Proficient in building dynamic UIs with React.',
      },
      {
        title: 'React',
        icon: 'path_to_react_icon', // Replace with actual icon path
        description: 'Proficient in building dynamic UIs with React.',
      },
      {
        title: 'React',
        icon: 'path_to_react_icon', // Replace with actual icon path
        description: 'Proficient in building dynamic UIs with React.',
      },
      {
        title: 'React',
        icon: 'path_to_react_icon', // Replace with actual icon path
        description: 'Proficient in building dynamic UIs with React.',
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
      <h2 className='skills-heading'>Skills</h2>
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
