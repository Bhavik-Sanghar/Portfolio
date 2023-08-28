import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component
import '../Styles/Skills.css'; // Your CSS file for the Skills page
import html from '../Asset/html.png';
import css  from '../Asset/css.png';
import js  from '../Asset/js.png'
import bs  from '../Asset/bs.png'
import react  from '../Asset/react.png'
import rbs  from '../Asset/rbs.png'
import node from '../Asset/node.png'
import mongo  from '../Asset/mongo.png'



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
      icon: react, // Replace with actual icon path
      description: 'Proficient in building dynamic UIs with React.',
    },
    {
        title: 'Bootstrap',
        icon: bs , // Replace with actual icon path
        description: 'Proficient in building dynamic UIs with React.',
      },
      {
        title: 'React Bootstrap',
        icon: rbs, // Replace with actual icon path
        description: 'Proficient in building dynamic UIs with React.',
      },
      {
        title: 'Node',
        icon: node, // Replace with actual icon path
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
