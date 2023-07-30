import React from 'react'
import'./Skill-card.css';
const SkillCard = ({skill}) => {
  return (
    <div className="Skill-card">
      <div className="Skill-icon">{skill.icon}</div>
      <label className="Skill-name">{skill.name}</label>
    </div>
  )
}

export default SkillCard;
