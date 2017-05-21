import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid
 } from 'react-bootstrap'
import '../../App.css';

const isActiveFunc = (match, location) => {
  return match
}

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <Grid>
          <NavLink
            isActive={isActiveFunc}
            to="/home">首页</NavLink>
          <NavLink
            isActive={isActiveFunc}
            to="/createStory">写故事</NavLink>
          <NavLink
            isActive={isActiveFunc}
            to="/event-story-list">事件故事</NavLink>
          <NavLink
            isActive={isActiveFunc}
            to="/about">关于</NavLink>
          </Grid>
        </nav>
      </div>
    )
  }
}

export default Header;
