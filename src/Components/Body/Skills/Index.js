import React from "react";
import'./Skills.css'
import Dash from "../../Common/Dash/Index";
import { SkillsData } from "../../Data/Skills";
import SkillCard from "./Skill-card";
 function Skills (){
    const data = SkillsData;
    return (
        <div className="Skills"><Dash />
        <label className="Section-title">Skills</label>
        <div className="Skills-container"></div>
        {data.map((item)=>{
         return(
            <div className="Skills-section">
             <label className="Skills-section-title">{item.type}</label>
            <div className="Skills-list">
             {item.list.map((skill)=>{
                return(
                 <SkillCard skill={skill} />
                )

                
             })}
            </div>
            </div>
         )

         
        })}
        </div>
    )
 }
 export  default Skills;