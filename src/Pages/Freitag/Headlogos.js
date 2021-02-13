import React, { Component } from 'react';
import bell from "../../picture/bell.svg";
import list from "../../picture/list.png";

class Headlogos extends Component {
    render() {
        return (
            <>
                     <div className="headlogos">
          <img
            className="top-logo"
            alt="logo"
            src="http://www.freitag.ch/profiles/freitag_neo/themes/neocortex/images/logo.svg"
          ></img>
          <img
            className="listicon"
            src={list}
            alt="list"
            onClick={this.props.openNav}
          ></img>
          <img className="bellicon" src={bell} alt="list"></img>
          </div>
            </>
        );
    }
}

export default Headlogos;