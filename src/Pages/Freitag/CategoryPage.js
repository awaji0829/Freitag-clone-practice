import React, { Component } from "react";
import "./CategoryPage.scss";
import list from "../../picture/list.png";
import bell from "../../picture/bell.svg";
import { FuryData } from "./FuryData";
import DescProduct from "./DescProduct";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import ProductmapList from "./ProductmapList";

export default class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      furydata: [],
      furyDesc: [],
      furydescdata: [],
      isdescClose: false,
      scroll: 0,
      isnavopen: true,
      cartoneData: [],
      cartOpen: false,
    };
  }

  componentDidMount() {
    this.setState({ furydata: FuryData });
  }

  openNav = () => {
    this.setState({ isnavopen: !this.state.isnavopen });
  };

  showDesc = (e) => {
    console.log(typeof e);
    if (0 < e && e < 9) {
      window.scrollTo({ top: 242, behavior: "smooth" });
    } else if (8 < e && e < 17) {
      window.scrollTo({ top: 400, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 422, behavior: "smooth" });
    }

    const furyDesc = this.state.furydata.filter((fury) => {
      return fury.id === e;
    });

    this.setState({ furydescdata: furyDesc, isdescClose: false });
  };

  closeDesc = () => {
    this.setState({ isdescClose: !this.state.isdescClose });
  };

  cartClick = (e) => {
    const fury = this.state.furydata.filter((fury) => {
      return fury.id === e;
    });

    const cartData = [...this.state.cartoneData, ...[{ fury }]];
    this.setState({ cartoneData: cartData, cartOpen: true });
  };

  openNav = () => {
    this.setState({ isnavopen: !this.state.isnavopen });
  };

  render() {
    const {
      furydata,
      furydescdata,
      isdescClose,
      // isnavopen,
      cartoneData,
      cartOpen,
    } = this.state;
    return (
      <div className="CategoryPage">
        <CartModal cartOpen={cartOpen} cartoneData={cartoneData} />
        <div className="logo-container">
          <Link to="/">
            <img
              className="top-logo"
              alt="logo"
              src="http://www.freitag.ch/profiles/freitag_neo/themes/neocortex/images/logo.svg"
            ></img>
          </Link>
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
            cartClick={this.cartClick}
          />

          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={isdescClose}
            rangenumone={rangenumone[1]}
            rangenumtwo={rangenumtwo[1]}
            showDesc={this.showDesc}
            closeDesc={this.closeDesc}
            cartClick={this.cartClick}
          />

          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={isdescClose}
            rangenumone={rangenumone[2]}
            rangenumtwo={rangenumtwo[2]}
            showDesc={this.showDesc}
            closeDesc={this.closeDesc}
            cartClick={this.cartClick}
          />
        </div>

        <div className="product-btn">나만의 F132 FURY 선택하기</div>
{/* 
<ProductmapList  furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={isdescClose}
            showDesc={this.showDesc}
            closeDesc={this.closeDesc}
            cartClick={this.cartClick}
/> */}

      </div>
    );
  }
}

const rangenumone = [0, 8, 16];
const rangenumtwo = [9, 17, 25];
