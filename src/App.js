import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
        Redirect
} from 'react-router-dom';
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'
import Home from './features/home'
import CreateStory from './features/createStory'
import About from './features/about'
import EventStoryList from './features/event-story-list'

const App = () => (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component = {Home}/>
        <Route path="/createStory" component = {CreateStory} />
        <Route path="/event-story-list" component = {EventStoryList}/>
        <Route path="/about" component = {About}/>
        <Route path="/events/:year(\d{4})" render={({match}) =>(
            <h1>Detailed event list of year: {match.params.year}</h1>
          )}/>
        <Route path="/login-redirect" render={()=>(
            <Redirect to="/home" />
          )}/>
        <Route render={()=><h1>Page not found</h1>}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)

export default App;
