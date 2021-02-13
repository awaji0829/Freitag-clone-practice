import React, { Component } from 'react';

class Descfury extends Component {
    render() {
        const {img, id,name, price, color, descone ,desctwo,descthree, closeDesc, cartClick}= this.props;
        return (
            <div className="furydesccontainer">
                    <div className="furydescbox">
                      <img
                        alt="fury"
                        className="furydescimg"
                        src={img}
                      ></img>
                      <div className="furydesctext">
                        <div className="descname">{name}</div>
                        <div className="descprice">
                          A Blast from the Past, {price}
                        </div>
                        <div className="desccolor">COLOR : {color}</div>
                        <div className="desctext">- {descone}</div>
                        <div className="desctext">- {desctwo}</div>
                        <div className="desctext">- {descthree}</div>
                        <div  onClick={()=>cartClick(id)} className="cart-btn">장바구니에 추가</div>
                        <span  className="desc-closebtn" onClick={closeDesc}>X</span>
                      </div>
                    </div>
                  </div>
        );
    }
}

export default Descfury;