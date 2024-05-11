import React from "react";
import Header from "../../components/Header";
import Intro from "./intro.js";
import About from "./About.js";
import Experiences from "./Experiences.js";
import Projects from "./Projects.js";
import Courses from "./Courses.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import LeftSider from "./LeftSider.js";

function Home() {
    return(<div >
         <Header />
         <div className="bg-primary px-40  sm:px-5">
         <Intro />
         <About />
         <Experiences />
         <Projects />
         <Courses/>
         <Contact />
         <Footer />
         </div>
         </div>
    )
}


export default Home