import React, { Component } from 'react';
import './GitHub.css'

class GitHub extends Component {

   constructor(props) {
      super(props);
      this.state = {
         GitPost: [],
         GitPR: [],
         issues: false,
         pullsRequest: true,
         title: "GITHUB ISSUES"
      }

   }
   hiddeIssues() {
      this.setState({
         issues: false,
         pullsRequest: true,
         title: "GITHUB ISSUES"
      })
   }

   hiddePR() {
      this.setState({
         issues: true,
         pullsRequest: false,
         title: "GITHUB PR HISTORY"
      })
   }

   gitlabStyles = {
      fontWeight: 100,
      textAlign: 'center',
      fontSize: '13px',
      color: '#6272a4'
   };

   componentDidMount() {
      fetch(`https://api.github.com/search/issues?q=javascript+type+language:javascript+state:open&sort=created&order=asc`)
         .then(result => result.json())
         .then(res => this.setState({ GitPost: res.items }))
   }

   render() {
      return (
         <div className="github">
            <div className="redditBox">
               <div className="gitIcon">
                  <div>
                     <span aria-hidden="true" className="fa fa-github-alt"></span>
                     <span class="IconText"> {this.state.title}</span>
                     <br />
                     <span className="spanButton" style={this.gitlabStyles}>switch to gitlab</span>
                  </div>
                  <div>
                     <br />
                     <span className="spanButton issueText" onClick={() => this.hiddeIssues()}>ISSUES</span>
                     <span className="spanButton prText" onClick={() => this.hiddePR()}>PULL REQUESTS</span>
                  </div>
               </div>
               {
                  this.state.pullsRequest ?
                     <div className="gitNews">
                        {
                           this.state.GitPost.map((GitPost, index) => {
                              let repository_url = GitPost.repository_url;
                              let user_name = repository_url.split("/").reverse()[1];
                              let repository_name = repository_url.split("/").reverse()[0];
                              let totalRepo = user_name.concat("/", repository_name);
                              return (
                                 <li className="NewsTitle">
                                    <a href={GitPost.html_url} key={index}>
                                       <h5 className="repoName">Repo: {totalRepo}</h5>
                                       <span className="repoIssue">Issue #{GitPost.number}</span>
                                       <br />
                                       <span className="repoTitle">{GitPost.title}</span>
                                       <br />
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </div>
                     : null
               }
               {
                  this.state.issues ?
                     <div className="gitNews">
                        {
                           this.state.GitPost.map((GitPost, index) => {
                              let repository_url = GitPost.repository_url;
                              let user_name = repository_url.split("/").reverse()[1];
                              let repository_name = repository_url.split("/").reverse()[0];
                              let totalRepo = user_name.concat("/", repository_name);
                              return (
                                 <li className="NewsTitle">
                                    <a href={GitPost.html_url} key={index}>
                                       <h5 className="repoName">Repo: {totalRepo}</h5>
                                       <span className="repoPR">Pull Request #{GitPost.number}</span>
                                       <br />
                                       <span className="repoTitle">{GitPost.title}</span>
                                       <br />
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </div>
                     : null
               }

            </div>
         </div>
      );
   }
}

export default GitHub;