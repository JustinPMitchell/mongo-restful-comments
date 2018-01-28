import React, { Component } from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import DATA from './data';
import style from './style';

class CommentBox extends Component {
  constructor(props) {
    super(props) {
      this.state = { data: [] };
    }
  }
  render() {
    <div style={ style.commentBox }>
      <h2>Comments:</h2>
      <CommentList data={ DATA }/>
      <CommentForm />
    </div>
  }
}

export default CommentBox;