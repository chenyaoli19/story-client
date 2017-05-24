import delay from './delay';

const stories = [
  {
    id:'1',
    storyTitle: '我的叔叔',
    year: '1998',
    eventName: '洪水',
    content: '有一天...'
  },
  {
    id:'2',
    storyTitle: '再见了，家',
    year: '1998',
    eventName: '嫦娥一号',
    content: '天上的月亮...'
  },
  {
    id:'3',
    storyTitle: '游戏',
    year: '1998',
    eventName: '澳元',
    content: '发奋图强...'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

class StoryApi {
  static getAllStories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], stories));
      }, delay);
    });
  }

  static saveStory(story) {
	story = Object.assign({}, story); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        story['id'] = generateId()
        stories.push(story);
        resolve(story);
      }, delay);
    });
  }

  static deleteStory(storyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfStoryToDelete = stories.findIndex(story => {
          story.id == storyId;
        });
        stories.splice(indexOfStoryToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default StoryApi;
