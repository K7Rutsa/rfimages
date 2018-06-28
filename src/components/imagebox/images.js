import React, { Component } from "react";
import "./images.css";

class images extends Component {
  state = {
    view: false,
    img: ""
  };

  viewClass = [];

  showFull = img => {
    this.setState({
      view: true,
      img: img
    });
  };

  close = () => {
    this.setState({
      view: false
    });
  }

  render() {
    return (

        <div className="img__container">
          {this.props.imgs.map((img, index) => {
            return (
              <div key={index}>
                <img
                  src={img.webformatURL}
                  alt=""
                  onClick={() => this.showFull(img.largeImageURL)}
                  className="previewImg"
                />
                {this.state.view ? (
                  <div className="view">
                   
                      <img src={this.state.img} alt="" /> 
                      <span onClick={this.close}><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="50" height="50" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></svg></span>
                    
                  </div>
                ) : null}
                </div>
            );
          })}
        </div>
      
    );
  }
}

export default images;
