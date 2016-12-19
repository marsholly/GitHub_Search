import React, { Component } from 'react';
import GitHubActions from '../actions/GitHubActions';
import { Link } from 'react-router';


export default class Navbar extends Component {
  constructor() {
    super();
    this.searchByLanguage = this.searchByLanguage.bind(this);
    this.searchByUser = this.searchByUser.bind(this);
  }

  searchByLanguage() {
    let languages = this.refs.langlib.value;
    GitHubActions.searchByLanguage(languages);
  }

  searchByUser() {
    let langlib  = this.refs.langlib.value;
    GitHubActions.searchByUser(langlib);
  }

  render() {
    return (
      <div className="container text-center">
        <h1>An app that helps you find the best repos and developers on:</h1>
        <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width='200px'/>
        <div className="inputsContainer text-center">
          <div className="row searchBlock text-center">
            <input type="text" className="form-control gitInputForm" placeholder="Enter a language or library to Get Started" ref='langlib'/>
          </div>
          <div className="col-xs-6">
            <Link to='GitHub_Search/topRepo' className="git-btn" onClick={this.searchByLanguage}>Find Top Repos</Link>
          </div>
          <div className="col-xs-6">
            <Link to='GitHub_Search/topUser' className="git-btn" onClick={this.searchByUser}>Find Top Developers</Link>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
};
