
import React from "react"
import Navbar from "./navbar/page";
import  "./globals.css";


const HomePage = () => {
  return(<div> 
      <Navbar/>
      
    <h1 className="Home">Welcome to official website of Education INN Coaching Centre</h1>
    <h1 className="goal">Our goal is to provide the best student for the upcoming future</h1>
    
      <h2 className="discount">Hurry Up!Special Discount is available now.</h2><br/>
      
    </div>
  )

};

export default HomePage