import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Styles/ProjectCard.css'; // Your CSS file for project cards

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
