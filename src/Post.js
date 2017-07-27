import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { loadData } from './enhancer'
import Loader from './loading'


class Comment extends React.Component {
    renderComment(comment) {
      const {name, body, id} = comment;
        return (
            <Segment>
              <h1>{name}</h1>
              <p>{body}</p>
            </Segment>
        )
    }
    render() {
      console.log(this.props);
        return (
          <div>{this.props.data.comments.map((comment) => this.renderComment(comment))}</div>
        );
    }
}

class PostSegment extends React.Component {
  state = {
    reveal: false
  }
  toggleComment() {
    this.setState({
      reveal: !this.state.reveal 
    })
  }

  renderComment() {
      const PostComment = loadData(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`,
        (response) => ({comments: response})
      )(Comment, Loader);
      return <PostComment />
  }
  render() {
      const {title, body, id} = this.props;
        return (
            <Segment>
              <h1>{title}</h1>
              <p>{body}</p>
              <Button secondary onClick={() => this.toggleComment()}>View Comments</Button>
              {this.state.reveal && this.renderComment()}
            </Segment>
        )
  }
}

export default class Post extends React.Component {
    renderPost(post, key) {
        return <PostSegment {...post} key={key} />
    }
    render() {
        const {posts} = this.props.data;
        return (
            <div>
              {posts.map((post, key) => this.renderPost(post, key))}
            </div>
        );
    }
}
