import React from 'react'
import { Segment } from 'semantic-ui-react'

export default class Post extends React.Component {
    renderPost(post, key) {
        return (
            <Segment key={key}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </Segment>
        )
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
