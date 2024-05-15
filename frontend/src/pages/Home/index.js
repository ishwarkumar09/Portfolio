import React from "react";
import Header from "../../components/Header";
import Intro from "./intro.js";
import About from "./About.js";
import Experiences from "./Experiences.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import { useSelector } from "react-redux";


function Home() {
    const {loading , portfolioData} =useSelector((state) => state.root);
    return(<div >
         <Header />
        {portfolioData && ( <div className="bg-primary px-40  sm:px-5">
         <Intro />
         <About />
         <Experiences />
         <Projects />
         <Contact />
         <Footer />
         </div>) }
         </div>
    )
}


export default Home