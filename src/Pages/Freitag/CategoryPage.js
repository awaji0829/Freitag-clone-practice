import React, { Component } from "react";
import "./CategoryPage.scss";
import list from "../../picture/list.png";
import bell from "../../picture/bell.svg";
import { FuryData } from "./FuryData";
import Descfury from "./Descfury";
import Productimg from "./Productimg";

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      furydata: [],
      furyDesc: [],
      furydescdata: [],
      isdescClose: false,
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
    const { furydata, furydescdata, isdescClose } = this.state;
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
          {furydata.map((fury) => {
            return (
              <>
                {fury.id < 9 ? (
                  <Productimg
                    img={fury.img}
                    showDesc={this.showDesc}
                    id={fury.id}
                  />
                ) : null}
              </>
            );
          })}
          {furydescdata.map((fury) => {
            return (
              <>
                {!isdescClose && fury.id < 9 && (
                  <Descfury
                    img={fury.img}
                    name={fury.name}
                    price={fury.price}
                    color={fury.color}
                    descone={fury.descone}
                    desctwo={fury.desctwo}
                    descthree={fury.descthree}
                    closeDesc={this.closeDesc}
                  />
                )}
              </>
            );
          })}
          {furydata.map((fury) => {
            return (
              <>
                {fury.id > 8 && fury.id < 17 ? (
                  <Productimg
                    img={fury.img}
                    showDesc={this.showDesc}
                    id={fury.id}
                  />
                ) : null}
              </>
            );
          })}
          {furydescdata.map((fury) => {
            return (
              <>
                {!isdescClose && fury.id > 8 && fury.id < 17 && (
                  <Descfury
                    img={fury.img}
                    name={fury.name}
                    price={fury.price}
                    color={fury.color}
                    descone={fury.descone}
                    desctwo={fury.desctwo}
                    descthree={fury.descthree}
                    closeDesc={this.closeDesc}
                  />
                )}
              </>
            );
          })}
          {furydata.map((fury) => {
            return (
              <>
                {fury.id > 16 && fury.id < 25 ? (
                  <Productimg
                    img={fury.img}
                    showDesc={this.showDesc}
                    id={fury.id}
                  />
                ) : null}
              </>
            );
          })}
          {furydescdata.map((fury) => {
            return (
              <>
                {!isdescClose && fury.id > 16 && (
                  <Descfury
                    img={fury.img}
                    name={fury.name}
                    price={fury.price}
                    color={fury.color}
                    descone={fury.descone}
                    desctwo={fury.desctwo}
                    descthree={fury.descthree}
                    closeDesc={this.closeDesc}
                  />
                )}
              </>
            );
          })}
        </div>

        <div className="product-btn">나만의 F132 FURY 선택하기</div>
      </div>
    );
  }
}

export default CategoryPage;
