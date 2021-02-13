import React, { Component } from "react";
import "./Fmain.scss";
import list from "../../picture/list.png";
import { FcategoryData } from "./FcategoryData";
import { Fstoriesdata } from "./Fstoriesdata";
import bell from "../../picture/bell.svg";
import FnavModal from "./FnavModal";

class Fmain extends Component {
  constructor() {
    super();
    this.state = {
      categorydata: [],
      fstoriesdata: [],
      isnavopen: true,
      right: true,
      slidewidth: 2264,
      curwidth: "",
      nextbtn: true,
      prevbtn: false,
    };
  }

  componentDidMount() {
    // window.addEventListener("scroll", this.onScroll);
    this.setState({ categorydata: FcategoryData, fstoriesdata: Fstoriesdata });
  }

  openNav = () => {
    this.setState({ isnavopen: !this.state.isnavopen });
  };

  slideRight = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth >= -849 && curwidth - 283,
      nextbtn: curwidth === -849 ? false : true,
      prevbtn: true,
    });
  };

  slideLeft = () => {
    // if (this.state.curwidth !== 0) {
    //   this.setState({ curwidth: this.state.curwidth + 283 });
    // }
    // if (this.state.curwidth === -283) {
    //   this.setState({ prevbtn: false });
    // }

    // console.log(this.state.curwidth);

    // this.setState({ nextbtn: true });

    this.setState({
      curwidth: this.state.curwidth !== 0 && this.state.curwidth + 283,
      prevbtn: this.state.curwidth === -283 ? false : true,
      nextbtn: true,
    });
  };

  // onScroll = () => {
  //   const a = document.getElementById("a");
  //   const x =a.scrollX;
  //   console.log(x);

  // };

  // componentWillUnmount = () => {
  //   window.addEventListener("scroll", this.onScroll);

  // };

  // scroll = () => {
  //   const a = document.getElementById("a");
  //   console.log(a.scrollLeft);
  // };

  render() {
    const { categorydata, fstoriesdata, isnavopen } = this.state;
    return (
      <div className="Fmain">
        <FnavModal isnavopen={isnavopen} openNav={this.openNav} />

        <div className="logo-container">
          <img
            className="top-logo"
            alt="logo"
            src="http://www.freitag.ch/profiles/freitag_neo/themes/neocortex/images/logo.svg"
          ></img>
          <img
            className="listicon"
            src={list}
            alt="list"
            onClick={this.openNav}
          ></img>
          <img className="bellicon" src={bell} alt="list"></img>
          <span className="unfolding-logo">UNFOLDING SOON</span>

          <video loop autoPlay muted className="mainvideo">
            <source
              src="https://www.freitag.ch/sites/default/files/neo_content_video/210127_frbr_teaser_master_brompton_desktop-startseite.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="shop">SHOP</div>
        <div className="main-categorys">
          {categorydata.map((category) => {
            return (
              <div className="main-categorycontainer">
                <img
                  alt="main-category"
                  src={category.img}
                  className="main-categoryimg"
                ></img>
                <div className="main-categorytext">{category.name}</div>
              </div>
            );
          })}
        </div>

        <div className="main-diy">
          <img
            alt="diy"
            className="main-diyimg"
            src="https://freitag.rokka.io/page-width/910134abdf49aec7b0d9489492fca138f0e211d1/freitag-store-gruengasse-f719mel-philipfrowein-02-crop.jpg"
          ></img>
          <div className="main-diytext">
            <h1>MAKE YOUR OWN F719 MEL</h1>
            <p>
              FREITAG의 신제품이 아직 완성단계를 기다리고 있습니다.
              <br />
              F-ederation멤버라면 직접 취리히의 gruengasse 스토어에서, 화상
              세션으로 이 새로운 제품을 완성해 보세요.
            </p>
            <div className="main-diybtn">지금 DIY세션을 예약하세요</div>
          </div>
        </div>
        <div className="stories-head">STORIES FROM FREITAG</div>
        <div id="a" onScroll={this.scroll} className="main-stories">
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
      </div>
    );
  }
}

export default Fmain;
