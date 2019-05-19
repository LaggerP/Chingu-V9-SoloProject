import React, { Component } from 'react';
import './Reddit.css'
import RedditJSON from '../../Data/dataReddit.json'

class Reddit extends Component {
   render() {
      return (
         <div className="reddit">
            <div className="redditBox">
               <div className="redditIcon">
                  <span aria-hidden="true" className="fa fa-reddit-alien"></span>
                  <span class="IconText"> POPULAR ON R/JAVASCRIPT</span>
               </div>
               <div className="redditNews">
                  {RedditJSON.map((post, index) => {
                     return (
                        <li className="NewsTitle">
                           <a href="">
                              <h5 className="Title">{post.title}</h5>
                              <span className="userPost">Posted by: {post.userPost}</span>
                              <br />
                              <span className="scoreReddit">Reddit Score: {post.scoreReddit}</span>
                              <br />
                              <a href={post.linkComment} className="linkComment">Link to Comments</a>
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