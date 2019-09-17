import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addPost } from '../actions';

export class PostForm extends Component {
  state = {
    content: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let posts = this.props.posts.map((post, i) => <li key={i}>{post.content}</li>);
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="content">Post Content</label>
            <input 
              type="text"
              name="content"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
            /> {/* End of Post Content Input */}
          </div>
          <input type="submit" value="Create Post" />
        </form>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

// connects to store
function mapStateToProps( combineReducers ) {
  return {
    posts: combineReducers.postsReducer.posts
  }
}

// connects to reducer
function mapDispatchToProps ( dispatch ) {
  return {
    addPost: post => dispatch(addPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
