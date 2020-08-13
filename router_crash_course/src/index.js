import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link,Switch,BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import User from "./User";
import Visit from "./Visit"
import Notfound from './Notfound';

const routing = (
  <Router>
    <Switch> 
      <Route exact path="/" component = {App} />
      <Route exact path="/user" component = {User} />
      <Route exact path="/visit" component = {Visit} />
      <Route component = {Notfound} />      

    </Switch>   
  </Router>
)


ReactDOM.render(
  // <React.StrictMode>
    routing
  // </React.StrictMode>,,
  ,
  document.getElementById('root')
);

