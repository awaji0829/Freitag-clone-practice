import React, { Component } from "react";

class Productimg extends Component {
  render() {
    return (
      <img
        alt="fury"
        src={this.props.img}
        className="furyimg"
        onClick={()=>this.props.showDesc(this.props.id)}
      ></img>
    );
  }
}

export default Productimg;
