import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar"
import Landing from "../components/LandingPage";

const Home = () =>{

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Landing/>
        </>
    )
}

export default Home