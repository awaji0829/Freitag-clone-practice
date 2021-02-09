import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbarContainer">
        <input
          type="text"
          className="searchBar"
          placeholder="이름을 검색하세요"
          onChange={this.props.searchSong}
        ></input>
      </div>
    );
  }
}

export default SearchBar;


