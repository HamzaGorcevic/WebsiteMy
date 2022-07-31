import React from "react";
import Navbar from "./Navbar";
import Section from "./Sectio";
import Medium from "./Medium";
import Input from "./Input";
import Contact from "./Contact";
import Introducing from "./Introducing";
import Footer from "./Footer";
import AboutMe from "./AboutMe";

function Card() {
    return (
        <>
            <Navbar />
            <Section />
            <Input />
            <Introducing />
            <AboutMe/>
            <Contact />
            <Footer/>
            
            </>
    )
}




export default Card;