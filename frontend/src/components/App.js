import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

import api from '../api';

class App extends Component {
  state = {
    search: "",
    tweets: [],
    error: "",
    searching: false
  };

  handleInputChange = (event) => {
    if(this.state.error) {
      this.setState({error: ""});
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSearch = (event) => {
    event.preventDefault();
    if(this.state.search) {
      this.setState({searching: true});
      api.get('/', {'search': this.state.search}).then((response) => {
        this.setState({searching: false});
        if(response.data.payload.length){
          this.setState({tweets: response.data.payload});
        }
        else {
          this.setState({error: "Sorry, no results found for: "+this.state.search+". :("});
        }
      }).catch((error) => {
        this.setState({error: "Sorry, the following server error occurred: "+error});
      });
    }
    else {
      this.setState({error: "Oops! Looks like you forgot to type in a search."});
    }
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.tweets.length ? "container hasTweets" : "container"}>
          <div className="search">
            <div>
            <img className="logo" src="./twitter-splat.png" alt="Logo"/>
            <h1>Tiny Twitter Aggregator</h1>
            <form className="twitter-search-form" onSubmit={this.handleSearch}>
              <div className="form-group">
                <input className={this.state.search ? "form-control" : "form-control placeholder"} type="text" name="search" value={this.state.search} onChange={this.handleInputChange} placeholder="Search..." autoComplete="off" />
              </div>
              {this.state.error && <div className="error">{this.state.error}</div>}
              <button type="submit" className="btn btn-primary">{this.state.searching ? "Searching..." : "Search"}</button>
            </form>
            </div>
          </div>
          {this.state.tweets.length > 0 ? <div className="tweets">
            <h3>Tweets!</h3>
            <div className="tweets-container">
              {this.state.tweets.map((tweet, idx) => {
                return <Tweet key={idx} tweet={tweet} />;
              })}
            </div>
          </div> : ""}
        </div>
      </div>
    );
  }
}

export default App;
