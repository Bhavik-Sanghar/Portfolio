import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import '../Styles/Projects.css'; // Your CSS file for the Projects page

const Project = () => {
  const projects = [
    {
      title: 'Weather-App',
      image: 'data:image/jpeg;base64,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', // Replace with your image path
      description: 'This app is wether app',
      sourceCodeLink: '',
      liveDemoLink: ''

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
            sourceCodeLink={project.sourceCodeLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;