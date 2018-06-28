import React, { Component } from "react";
import "./App.css";

import Nav from "./components/nav/nav";
import Search from "./components/search/search";
import Images from "./components/imagebox/images";
import keys from "./config";

class App extends Component {

  state = {
    images: [],
    search: "technology",
    order: "popular"
  };

  getImgs = () => {

    fetch(
      `https://pixabay.com/api/?key=${
        keys.apiKey
      }&q=${this.state.search}&image_type=photo&pretty=true&order=${this.state.order}&per_page=100`
    )
      .then(res => res.json())
      .then(result =>
        this.setState({
          images: result.hits
        })
      );
  }

  componentDidMount() {
    this.getImgs();
  }

  onSearch = e => {
    this.setState({
      search: e.target.value
    }, () => {
      this.getImgs();
    })
  };

  showNew = () => {
    if(this.state.order === "popular"){
      this.setState({
        order: "latest"
      }, () => {
        this.getImgs()
      })
    }else {
      this.setState({
        order: "popular"
      }, () => {
        this.getImgs()
      })
    }
  };

  render() {

    return (
      <div className="App">
        <Nav click={this.showNew}> {this.state.order === "popular" ? 'SHOW LATEST' : 'SHOW POPULAR'} </Nav>
        <Search onSearch={this.onSearch} />
        {this.state.images.length > 0 ? <Images imgs={this.state.images} /> : null}
        
      </div>
    );
  }
}

export default App;
