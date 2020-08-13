import React , {useState}from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

//react router
import { BrowserRouter as Router , Link , Switch , Route }  from "react-router-dom"

//toast
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components or pages

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import PageNotFound from "./pages/PageNotFound"
//context
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

import config from "./firebase/config"
//initialize firebase

firebase.initializeApp(config);


function App() {
  const [user,setUser] = useState(null)
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value = {{user,setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer/>

      </UserContext.Provider>
    </Router>
    
  );
}

export default App;
