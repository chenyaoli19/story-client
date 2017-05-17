import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
        Route,
        NavLink,
        Switch,
        Redirect
} from 'react-router-dom';


const isActiveFunc = (match, location) => {
  return match
}
const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>
const Links = () => (
  <nav>
    <NavLink
      isActive={isActiveFunc}
      to="/home">Home</NavLink>
    <NavLink
      isActive={isActiveFunc}
      to="/about">About</NavLink>
    <NavLink
      isActive={isActiveFunc}
      to="/contact">Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route path="/home" component = {Home}/>
        <Route path="/about" component = {About}/>
        <Route path="/contact" component = {Contact}/>
        <Route path="/events/:year(\d{4})" render={({match}) =>(
            <h1>Detailed event list of year: {match.params.year}</h1>
          )}/>
        <Route path="/login-redirect" render={()=>(
            <Redirect to="/home" />
          )}/>
        <Route render={()=><h1>Page not found</h1>}/>
      </Switch>
    </div>
  </Router>
)

export default App;
