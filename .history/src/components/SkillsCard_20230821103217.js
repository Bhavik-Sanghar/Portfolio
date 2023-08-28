import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/SkillsCard.css"; // Your CSS file for skills cards

const SkillsCard = ({ image, skillName }) => {
  return (
    <div className="skills-card">
      <Card>
        <div className="image-container">
          <Card.Img className="skilllogo" variant="top" src={image} alt={skillName} />
        </div>
        <Card.Body>
          <Card.Title className="skill-name">{skillName}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsCard;
