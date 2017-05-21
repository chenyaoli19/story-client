import React from 'react'
import {PropTypes} from 'prop-types'
import '../../App.css';
import {connect} from 'react-redux'
import { Button,
         DropdownButton,
         MenuItem,
         FormGroup,
         FormControl,
         Grid,
         Row,
         Col
 } from 'react-bootstrap'
 import * as storyAction from './action/createStory.action.js'

class CreateStory extends React.Component {
  constructor(props, context){
    super(props, context)

    this.state={
      story: {
        storyTitle: '',
        year: '',
        eventName: '',
        content: ''
      }
    }

    this.onStoryTitleChange = this.onStoryTitleChange.bind(this)
    this.onYearChange = this.onYearChange.bind(this)
    this.onEventNameChange = this.onEventNameChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onStoryTitleChange(event){
    const story = this.state.story
    story.storyTitle= event.target.value
    this.setState({story: story})
  }
  onYearChange(event){
    const story = this.state.story
    story.year= event.target.value
    this.setState({story: story})
  }
  onEventNameChange(event){
    const story = this.state.story
    story.eventName= event.target.value
    this.setState({story: story})
  }
  onContentChange(event){
    const story = this.state.story
    story.content= event.target.value
    this.setState({story: story})
  }

  onClickSave(){
    // alert(`saving ${this.state.story.storyTitle}`)
    debugger;
    this.props.dispatch(storyAction.createStory(this.state.story))
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <h3>说出你的故事</h3>
          </Row>
          <Row>
            <Col xs={24} md={8}>
              <FormGroup controlId='storyTitle'>
                <FormControl
                  id='storyTitle'
                  type='text'
                  onChange={this.onStoryTitleChange}
                  placeholder='标题'/>
              </FormGroup>
              <FormGroup controlId="year">
                <FormControl componentClass="select" placeholder="年份" onChange={this.onYearChange}>
                  <option value='0'>选择年份</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="eventName">
                <FormControl componentClass="select" placeholder="大事件" onChange={this.onEventNameChange}>
                  <option value="0">选择大事件</option>
                  <option value="洪水">洪水</option>
                  <option value="嫦娥一号">嫦娥一号</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="eventName">
                <FormControl componentClass="textarea" placeholder="写故事" onSelect={this.onContentChange}/>
              </FormGroup>
              <Button onClick={this.onClickSave}>提交</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    story: state.story
  }
}

export default connect(mapStateToProps)(CreateStory)
