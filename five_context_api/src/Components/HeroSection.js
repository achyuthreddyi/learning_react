import React , {useContext} from "react"
import Themecontext from "../Context/Themecontext"
import AppTheme from "../Colors"
// import Themecontext from "../Context/Themecontext"

const HeroSection = () =>{
    const theme = useContext(Themecontext)[0]
    const currentTheme = AppTheme[theme]
    const [themeMode,setThememode] = useContext(Themecontext)
    
    return(
        <div
        style = {{
            padding: "1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign:"center"
         }}>
            <h1>
                Context API theme Toggler
            </h1>
            <p> this is a nice paragraph</p>
            <button
            onClick = { () =>{
                setThememode(themeMode === "light" ? "dark" : "light")
            }}
            style={{
                backgroundColor:"#26ae60",
                padding:"10px 150px",
                fontSize:"20px",
                color:"#fff",
                border:`${currentTheme.border}`

            }}>Click Me </button>
        </div>
    )
}

export default HeroSection;