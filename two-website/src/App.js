import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import HeroSection from "./Hero"
import AppSection from "./AppSection"
import CardSection from "./Card"

const App =() => {
    return (
        <div>
            
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )

}
export default App;