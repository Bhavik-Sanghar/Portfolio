import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component
import '../Styles/Skills.css'; // Your CSS file for the Skills page

const Skills = () => {
  const skills = [
    {
      title: 'HTML',
      icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F201%2F90%2Fpng-transparent-logo-html-html5.png&tbnid=8xau_NJHEISeKM&vet=12ahUKEwi14__79eyAAxWx6DgGHX8bCBsQMygBegQIARBe..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-vonbu&docid=DZfhvBQLhkh_aM&w=920&h=920&q=html%20logo%20transparent&ved=2ahUKEwi14__79eyAAxWx6DgGHX8bCBsQMygBegQIARBe', // Replace with actual icon path
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
      <h2 className=''>Skills</h2>
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
