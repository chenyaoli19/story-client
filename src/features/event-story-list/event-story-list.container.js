import React from 'react'
import {PropTypes} from 'prop-types'
import '../../App.css'
import {Grid,
  Well
} from 'react-bootstrap'
import {connect} from 'react-redux'

class EventStoryListPage extends React.Component{
  constructor(props, context){
    super(props, context)

    this.state={
      stories: [{
        id: '1',
        year: '1998',
        storyTitle: '我的叔叔',
        eventName: '洪水',
        content: '这天是周日...'
      },
      {
        id: '2',
        year: '1998',
        storyTitle: '再见了，家',
        eventName: '洪水',
        content: '从没想过...'
      }]
    }
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
        {this.state.stories.map(this.storyRow)}
        </Grid>
      </div>
    )
  }
}

EventStoryListPage.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(EventStoryListPage)
