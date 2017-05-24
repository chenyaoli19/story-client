import React from 'react'
import {PropTypes} from 'prop-types'
import '../../App.css'
import {Grid,
  Well
} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as eventStoryAction from './action/eventStory.action.js'
import {bindActionCreators} from 'redux'

class EventStoryListPage extends React.Component{
  constructor(props, context){
    super(props, context)
  }

  storyRow(story, index){
    return (
      <div key={index}>
        <Well>
            <p>{story.storyTitle}</p>
            <small>{story.content}</small>
        </Well>
      </div>
    )
  }

  render(){
    return (
      <div>
        <Grid>
        <h3>98'洪水 所有的故事</h3>
        {this.props.stories.map(this.storyRow)}
        </Grid>
      </div>
    )
  }
}

EventStoryListPage.PropTypes = {
  actions: PropTypes.object.isRequired,
  stories: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    stories: state.loadedStories
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(eventStoryAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventStoryListPage)
