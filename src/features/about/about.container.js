import React from 'react'
import {PropTypes} from 'prop-types'
import { Grid } from 'react-bootstrap'

class About extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render () {
    return (
      <div>
        <Grid>
        <h3>关于</h3>
        </Grid>
      </div>
    )
  }
}

export default About
