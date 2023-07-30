import React from "react";
import { SocialData } from "../../Data/Social";
import'./Social-contact.css';
function SocialContact(){
  const data = SocialData;
  return <div className="Social-contact">
    {data.map((item)=>{
      return(
<a href={item.link}>
  <div className="Social-icon-div">
<img src={item.icon} className="Social-icon" />
  </div>

</a>
      )
    })}
  </div>
}
export default SocialContact;