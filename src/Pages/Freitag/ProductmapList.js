import React, { Component } from "react";
import DescProduct from "./DescProduct";

class ProductmapList extends Component {
    constructor() {
        super();
        this.state = {
            furydata: [],
            furyDesc: [],
            furydescdata: [],
          isdescClose: false,
    
        };
      }


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
  render() {
    const { furydata, furydescdata ,showDesc, cartClick,isdescClose} = this.props;
    return (
      <>
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
            isdescClose={this.state.isdescClose}
            rangenumone={rangenumone[0]}
            rangenumtwo={rangenumtwo[0]}
            showDesc={showDesc}
            closeDesc={this.closeDesc}
            cartClick={cartClick}
          />

          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={this.state.isdescClose}
            rangenumone={rangenumone[1]}
            rangenumtwo={rangenumtwo[1]}
            showDesc={showDesc}
            closeDesc={this.closeDesc}
            cartClick={cartClick}
          />

          <DescProduct
            furydata={furydata}
            furydescdata={furydescdata}
            isdescClose={this.state.isdescClose}
            rangenumone={rangenumone[2]}
            rangenumtwo={rangenumtwo[2]}
            showDesc={showDesc}
            closeDesc={this.closeDesc}
            cartClick={cartClick}
          />
        </div>

        <div className="product-btn">나만의 F132 FURY 선택하기</div>
      </>
    );
  }
}

export default ProductmapList;

const rangenumone = [0, 8, 16];
const rangenumtwo = [9, 17, 25];
