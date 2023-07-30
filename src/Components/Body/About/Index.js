import React from 'react'
import SocialContact from '../../Common/Social-contact/Index'
import'./About.css'
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         Hello There ,
         <br /> I am 
         <br></br>
          <span className="info-name">AKASH KASHYAP</span>
          <br/>I love experimenting with the web.
          
        </div>

        <div className="about-photo">
        < img  src={require("../../../assets/Akash.png")} className = "picture" /> 
        </div>

      </div>
      <div className="about-bottom">
        
      </div>
      <SocialContact />
    </div>
  )
}

export default About
