import React, {Component} from 'react'
import {Grid} from 'react-bootstrap'

const Footer = React.createClass({
  render () {
    return (
      <div className="footer">
        <Grid>
          <p>&copy; C公益</p>
        </Grid>
      </div>
    )
  }
})

export default Footer
