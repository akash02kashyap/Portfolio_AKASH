import React from 'react'
import './Home.css'
import Header from '../Header/Index'
import Body from '../Body/Index'
import Footer from '../Footer/Index'

const Home = () => {
  return (
    
    <div className="home">
        <div>
     <Header />
    </div>

    <div >
     <Body />
    </div>

    <div >
     <Footer />
    </div>

  </div>
  )
};

export default Home;
