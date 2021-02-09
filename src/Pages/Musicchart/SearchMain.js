import React, { Component } from "react";
import MusicList from "./MusicList";
import SearchBar from "./SearchBar";
import "./SearchMain.scss";

class SearchMain extends Component {
  constructor() {
    super();
    this.state = { Music: [], searchText: "", isClcik: true, modalMusic: "" };
  }
  componentDidMount() {
    fetch("http://localhost:3001/data/music.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Music: data,
          searchText: "",
        });
      });
  }

  searchSong = (e) => {
    this.setState({ searchText: e.target.value });
  };
consol
  musicModal = (e) => {
    this.setState({
      isClcik: !this.state.isClcik,
    });
console.dir(e);
    const modalSong = this.state.Music.filter((song) => {
      return song.rank === e;
    });
    this.setState({ modalMusic: modalSong });
  };

  render() {
    const filterSong = this.state.Music.filter((song) => {
      return song.title.includes(this.state.searchText);
    });

    return (
      <div className="SearchMain">
        {!this.state.isClcik &&
          this.state.modalMusic.map((m) => {
            return (
              <div className="back">
              <div className="modalContainer">
                <img className="modalposter" alt="poster" src={m.poster} />
                <span className="modalrank">{m.rank}위</span>
                <div className="modaltitle">{m.title}</div>              
                <span className="modalstatus">
                  {m.state === "상승" && <span className="statusup">상승</span>}
                  {m.state === "하강" && (
                    <span className="statusdown">하락</span>
                  )}
                  {m.state === "유지" && <span className="status">유지</span>}
                </span>
              </div>
              </div>
            );
          })}
        <div className="headtitle">K-POP Music Chart</div>
        <SearchBar searchSong={this.searchSong} />

        {filterSong.map((m) => {
          return (
            <MusicList
              key={m.rank}
              poster={m.poster}
              title={m.title}
              rank={m.rank}
              state={m.state}
              singer={m.singer}
              musicModal={this.musicModal}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchMain;
