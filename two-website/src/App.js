import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import HeroSection from "./Hero"
import AppSection from "./AppSection"
import CardSection from "./CardSection"
import Card from "./card" 

const App =() => {
    return (
        <div>
            {/* <Card/>             */}
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>

        </div>
    )

}
export default App;