import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component
import '../Styles/Skills.css'; // Your CSS file for the Skills page
import html from '../Asset/html.png'
import css , {js} from '../Asset'

const Skills = () => {
  const skills = [
    {
      title: 'HTML',
      icon: html,
      description: 'Proficient in writing semantic HTML5 markup.',
    },
    {
      title: 'CSS',
      icon: css, // Replace with actual icon path
      description: 'Skilled in styling with CSS and CSS frameworks.',
    },
    {
      title: 'JavaScript',
      icon: js, // Replace with actual icon path
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
