import React, { Component } from 'react';

class ShopCategory extends Component {
    render() {
    const {categorydata} = this.props;
        return (
            <>
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
            </>
        );
    }
}

export default ShopCategory;