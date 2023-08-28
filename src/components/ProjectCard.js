import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/ProjectCard.css"; // Your CSS file for project cards

const ProjectCard = ({
  image,
  title,
  description,
  sourceCodeLink,
  liveDemoLink,
}) => {
  return (
    <div className="project-card">
      <Card>
        <div className="image-container">
          <Card.Img variant="top" src={image} alt={title} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="project-buttons">
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
