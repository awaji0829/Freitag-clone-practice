import React, { Component } from "react";

class MainSotories extends Component {
  constructor() {
    super();
    this.state = {
      right: true,
      slidewidth: 2264,
      curwidth: "",
      nextbtn: true,
      prevbtn: false,
    };
  }

  slideRight = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth >= -849 && curwidth - 283,
      nextbtn: curwidth === -849 ? false : true,
      prevbtn: true,
    });
  };

  slideLeft = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth !== 0 && curwidth + 283,
      prevbtn: curwidth === -283 ? false : true,
      nextbtn: true,
    });
  };

  render() {
    const { fstoriesdata } = this.props;
    return (
      <>
        <div className="stories-head">STORIES FROM FREITAG</div>
        <div className="main-stories">
          <div
            className="wrapstory"
            style={{
              transform: `translate3d(${this.state.curwidth}px,0,0)`,
              transition: ` 0.5s ease-in `,
            }}
          >
            {fstoriesdata.map((story) => {
              return (
                <div className="main-storiesbox">
                  <img alt="story" src={story.img} className="storyimg"></img>
                  <div className="story-name">{story.name}</div>
                </div>
              );
            })}
          </div>
          <span
            onClick={this.slideRight}
            className="next"
            style={{ display: !this.state.nextbtn && "none" }}
          >
            다음
          </span>
          <span
            onClick={this.slideLeft}
            className="prev"
            style={{ display: !this.state.prevbtn && "none" }}
          >
            이전
          </span>
        </div>
      </>
    );
  }
}

export default MainSotories;
