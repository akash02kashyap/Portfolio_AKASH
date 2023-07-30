import React from "react";
import ProjectCard from "./Project-card";
import { ProjectsData } from "../../Data/Projects";
import Dash from "../../Common/Dash/Index";
import'./Projects.css';
function Projects(){
  const data = ProjectsData;
  return(
<div className="Projects">
  <Dash />
<label className="Section-title">Projects</label>
<div>
{data.map((Project)=>{
  return <ProjectCard Project={Project}/>;
})}
</div>
</div>
  );
}
export default Projects;