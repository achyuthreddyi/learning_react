import React,{useState} from 'react';
import ThemeContext from "./Context/Themecontext"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"

const App = () =>{

  const themeHook = useState("light")
  console.log(themeHook);
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />

      </div>
    </ThemeContext.Provider>
  )

}

export default App;
