import React, { Component } from "react";
import "./Fmain.scss";
import { FcategoryData } from "./FcategoryData";
import { Fstoriesdata } from "./Fstoriesdata";
import FnavModal from "./FnavModal";
import Headlogos from "./Headlogos";
import ShopCategory from "./ShopCategory";
import MainDiy from "./MainDiy";
import MainSotories from "./MainSotories";

class Fmain extends Component {
  constructor() {
    super();
    this.state = {
      categorydata: [],
      fstoriesdata: [],
      isnavopen: true,
    };
  }

  componentDidMount() {
    this.setState({ categorydata: FcategoryData, fstoriesdata: Fstoriesdata });
  }
  openNav = () => {
    this.setState({ isnavopen: !this.state.isnavopen });
  };

  render() {
    const { categorydata, fstoriesdata, isnavopen } = this.state;
    return (
      <div className="Fmain">
        <div className="logo-container">
          <FnavModal isnavopen={isnavopen} openNav={this.openNav} />

          <Headlogos openNav={this.openNav} />
          <span className="unfolding-logo">UNFOLDING SOON</span>

          <video loop autoPlay muted className="mainvideo">
            <source
              src="https://www.freitag.ch/sites/default/files/neo_content_video/210127_frbr_teaser_master_brompton_desktop-startseite.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <ShopCategory categorydata={categorydata} />
        <MainDiy />
        <MainSotories fstoriesdata={fstoriesdata} />
      </div>
    );
  }
}

export default Fmain;
