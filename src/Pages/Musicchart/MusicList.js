import React, { Component } from "react";

class MusicList extends Component {
  render() {
    const { poster, title, rank, singer } = this.props;
    return (
      <div className="songcontainer">
        <img className="poster" alt="poster" src={poster} onClick={()=>this.props.musicModal(rank)}/>
        <div className="titlestatus">
          <span className="title">{title}</span>
          {/* <span className="rank">{rank}위</span> */}
          {/* <span className="status">
            {state === "상승" && <span className="statusup">상승</span>}
            {state === "하강" && <span className="statusdown">하락</span>}
            {state === "유지" && <span className="status">유지</span>}
          </span> */}
        </div>
        <div className="singer">{singer}</div>
      </div>
    );
  }
}

export default MusicList;
