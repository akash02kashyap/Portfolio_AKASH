import React from 'react'
import'./Web.css'
const Web = () => {
  return (
    <div className="web">
     <div className="web-option">
     <a href='#projects'>
     <i className="fi fi-rr-edit-alt option-icon"></i> Projects
     </a>
     </div>
    
     <div className="web-option">
     <a href='#skills'>
     <i class="fi fi-rr-bulb"></i> Skills
  
     </a>
     </div>
    
     <div className="web-option">
     <a href='#work'>
     <i className="fi fi-rr-briefcase option-icon"></i>Work
     </a>
     </div>
    
     <div className="web-option">
     <a href='#contact'>
     <i class="fi fi-rr-user"></i>Contact
     </a>
     </div>
    </div>
  )
}

export default Web;
