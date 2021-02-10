import React, { Component } from "react";
import "./CategoryPage.scss";
import list from "../../picture/list.png";
import bell from "../../picture/bell.svg";
import { FuryData } from "./FuryData";
// import Descfury from "./Descfury";
// import Productimg from "./Productimg";
import DescProduct from "./DescProduct";

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      furydata: [],
      furyDesc: [],
      furydescdata: [],
      isdescClose: false,
      rangenumone: [0, 8, 16],
      rangenumtwo: [9, 17, 25],
    };
  }

  componentDidMount() {
    this.setState({ furydata: FuryData });
  }

  showDesc = (e) => {
    const furyDesc = this.state.furydata.filter((fury) => {
      return fury.id === e;
    });
    console.log(e);
    this.setState({ furydescdata: furyDesc, isdescClose: false });
  };

  closeDesc = () => {
    this.setState({ isdescClose: !this.state.isdescClose });
  };

  render() {
    const {
      furydata,
      furydescdata,
      isdescClose,
      rangenumone,
      rangenumtwo,
    } = this.state;
    return (
      <div className="CategoryPage">
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
        </div>

        <div className="store-bags-minihead">STORES - BAGS </div>
        <div className="bagpacks-furybighead">F132 FURY</div>
        <div className="priceandfilter">
          <span className="f132-price">A BLAST FROM THE PAST, $346</span>
          <span className="filterlogo">필터</span>
        </div>
        <div className="furycontainer">
          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={isdescClose}
            rangenumone={rangenumone[0]}
            rangenumtwo={rangenumtwo[0]}
            showDesc={this.showDesc}
            closeDesc={this.closeDesc}
          />

          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={isdescClose}
            rangenumone={rangenumone[1]}
            rangenumtwo={rangenumtwo[1]}
            showDesc={this.showDesc}
            closeDesc={this.closeDesc}
          />

          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={isdescClose}
            rangenumone={rangenumone[2]}
            rangenumtwo={rangenumtwo[2]}
            showDesc={this.showDesc}
            closeDesc={this.closeDesc}
          />
        </div>

        <div className="product-btn">나만의 F132 FURY 선택하기</div>
      </div>
    );
  }
}

export default CategoryPage;
