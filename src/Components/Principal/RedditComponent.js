import React, { Component } from 'react';
import './Reddit.css'

class Reddit extends Component {

   constructor(props) {
      super(props);
      this.state = {
         post: []
      }
   }
   componentDidMount() {
      fetch(`https://www.reddit.com/r/JavaScript.json?sort=popular`)
         .then(result => result.json())
         .then(res => this.setState({ post: res.data.children }))
   }

   render() {
      return (
         <div className="reddit">
            <div className="redditBox">
               <div className="redditIcon">
                  <span aria-hidden="true" className="fa fa-reddit-alien"></span>
                  <span class="IconText"> POPULAR ON R/JAVASCRIPT</span>
               </div>
               <div className="redditNews">
                  {this.state.post.map((post, index) => {
                     return (
                        <li className="NewsTitle">
                           <a href="" key={index}>
                              <h5 className="Title">{post.data.title}</h5>
                              <span className="userPost">Posted by: {post.data.author_fullname}</span>
                              <br />
                              <span className="scoreReddit">Reddit Score: {post.data.score}</span>
                              <br />
                              <a href={post.data.url} className="linkComment">Link to Comments</a>
                           </a>
                        </li>
                     )
                  })
                  }
               </div>

            </div>
         </div>
      );
   }
}

export default Reddit;