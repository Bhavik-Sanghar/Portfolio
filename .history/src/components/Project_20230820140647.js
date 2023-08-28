import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import '../Styles/Projects.css'; // Your CSS file for the Projects page

const Project = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg', // Replace with your image path
      description: 'Description for Project 1.',
    },
    // Add more project objects here
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
