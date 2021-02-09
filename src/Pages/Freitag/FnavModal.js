import React, { Component } from "react";
import { Link } from 'react-router-dom';

class FnavModal extends Component {
constructor(){
super();
this.state={openShop : true}

}
openShop = () => {
    this.setState({ openShop: !this.state.openShop });
  };

// goCategorypage=()=>{
//   this.props.history.push("/freitag");
// }

  render() {
    const { isnavopen, openNav } = this.props;
    return (
      <div>
        {!isnavopen && (
          <>
            <div className="modaloutside" onClick={openNav}></div>
            <div className="modalNavcontainer">
              <ul>
                <li></li>
                <li className="loginen">
                  <span>LOGIN</span>
                  <span>EN</span>
                </li>
                <li className="searchstores">
                  <li>SEARCH</li>
                  <li>STORIES</li>
                </li>
                <li onClick={this.openShop}>SHOP</li>
                {!this.state.openShop && (
                  <ul className="shopcate">
                    <li ><Link to="/categorypage"> BESTSELLERES</Link></li>
                    <li>ONLINE SPECIALS</li>
                  </ul>
                )}
                <li>STORIES</li>
                <li>CITY GUIDE LINES</li>
                <li>S.W.A.P</li>
                <li>CONNECT</li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default FnavModal;
