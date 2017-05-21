import React from 'react'
import {PropTypes} from 'prop-types'
import { Grid } from 'react-bootstrap'

class Home extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      abbrev_year_event_list: []
    }
  }

  render () {
    return (
      <div>
        <Grid>
        <h1>大事件表</h1>
        <h2>abbrev event list</h2>
        </Grid>
      </div>
    )
  }
}

export default Home
