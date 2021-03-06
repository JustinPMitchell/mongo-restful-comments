import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import style from './style.js';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  loadCommentsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data });
    })
  }

  handleCommentSubmit(comment) {
    //add POST request
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
        <CommentList data={ this.state.data }/>
        <CommentForm onCommentSubmit = { this.handleCommentSubmit } />
      </div>
    );
  }
}

export default CommentBox;