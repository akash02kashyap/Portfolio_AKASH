import React from 'react'
import'./Project-card.css'
function ProjectCard({Project}) {
  return (
    <div className="Project-card">
    <div className="Project-info">
        <label className="Project-title">{Project.title}</label>
        <div className="Project-links">
         {Project.demo && (
         <a className="Project-link" href={Project.demo}>
            <div className="Link-button">
            <i className="fi fi-rs-globe"></i>Demo
            </div>
            </a>
            )}
            {Project.github && ( <a className="Project-link" href={Project.github}>
            <div className="Link-button">
            
            <i className="devicon-github-original "></i>Github
          
            </div>
            </a>
            )}
        </div>
        <p>{Project.about}</p>
        <div className="Project-tags">
          {Project.tags.map((tag)=>{
            return(
              <label className="Tag">{tag}</label>
            )
          })}
        </div>
    </div>
      <img src={Project.image} className= "Project-photo" />
    </div>

  )
}

export default ProjectCard;
