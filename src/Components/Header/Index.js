import React,{useState} from 'react'
import './Header.css'
import Mobile from './Mobile/Index';
import Web from './Web/Index'
const Header = () => {
    const  [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">PORTFOLIO</div>
      <div className="menu">
        <div className="web-menu">
            <Web />
        </div>
        <div className="mobile-menu">
        <div onClick={()=> setIsOpen(true)}>
<i className="fi fi-rr-apps-add menu-icon"></i>
            </div>
         {isOpen && <Mobile isOpen = {isOpen} setIsOpen={setIsOpen} />}
        </div>
        </div>
    </div>
  );
}

export default Header;
