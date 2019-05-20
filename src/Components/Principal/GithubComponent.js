import React, { Component } from 'react';
import './GitHub.css'

class GitHub extends Component {

   constructor(props) {
      super(props);
      this.state = {
        GitPost: []
      }
   }
   componentDidMount() {
      fetch(`https://api.github.com/search/repositories?q=fork:false+stars:%3E%3D20+created:%3E2019-04-19+topic:JavaScript&sort=stars&order=desc`)
         .then(result => result.json())
         .then(res => this.setState({ GitPost: res.items }))
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
                  {this.state.GitPost.map((GitPost, index) => {
                     return (
                        <li className="NewsTitle">
                           <a href={GitPost.svn_url} key={index}>
                              <h5 className="Title">Repo: {GitPost.name}</h5>
                              <span className="userPost">Issue #{GitPost.open_issues_count}</span>
                              <span className="scoreReddit">{GitPost.git_commits_url}</span>
                              <br />
                              <br />
                              {/*
                     <a href={GitPost.data.url} className="linkComment">Link to Comments</a>*/}
                              
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

export default GitHub;