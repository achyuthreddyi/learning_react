import React ,{useContext} from "react"
import Themecontext from "../Context/Themecontext"

const ThemeToggler = () =>{
    const [themeMode , setThememode] = useContext(Themecontext)

    return(
        <div onClick = {() =>{
            setThememode( themeMode === "light" ? "dark":"light")
        }}>
            <span> {themeMode === "light" ? "Turn Off" : "lights on" } </span>
        </div>
    )

}

export default ThemeToggler