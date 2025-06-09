import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import '../Styles/Projects.css'; // Your CSS file for the Projects page
import news from '../Asset/news.png'
import wether from '../Asset/weather-app.png'
import quote from '../Asset/motivational.png'
import Todo from '../Asset/To-do.jpg'
import pokemn from '../Asset/pokeball.png'


const Project = () => {
  const projects = [
    {
      title: 'Weather-App',
      image : wether,
      description: 'This app is wether app',
      sourceCodeLink: 'https://github.com/Bhavik-Sanghar/Weather-app',
      liveDemoLink: 'https://64d9b7909f1f937d8dd749de--weather-bhavik.netlify.app/'

    },
    {
      title: 'News-App',
      image: news,
      description: 'This app is News app',
      sourceCodeLink: 'https://github.com/Bhavik-Sanghar/new_news',
      liveDemoLink: 'https://64dc4b9b469a3223177d5c32--news-bhavik.netlify.app/'

    },
    {
      title: 'Quotes-App',
      image: quote,
      description: 'This app is Quotes app',
      sourceCodeLink: 'https://github.com/Bhavik-Sanghar/Quote-app',
      liveDemoLink: 'https://659fd1f489b447630a2789af--quotes-bhavik.netlify.app/'

    },
    {
      title: 'To-DO List App',
      image: Todo,
      description: 'This app is TO-DO list app',
      sourceCodeLink: 'https://github.com/Bhavik-Sanghar/AngularToDo',
      liveDemoLink: 'https://bhavik-sanghar.github.io/AngularToDo/'
    },
    {
      title: 'Pokémon Card',
      image: pokemn,
      description: 'Fun Pokémon Card',
      sourceCodeLink: '',
      liveDemoLink: 'https://bhavik-sanghar.github.io/AngularToDo/'
    },
    // Add more project objects here
  ];

  return (
    <div className="projects-container">
      <h2 className='Heading'>Projects</h2>
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
