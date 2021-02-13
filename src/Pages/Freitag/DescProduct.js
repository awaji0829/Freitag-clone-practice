import React, { Component } from 'react';
import Descfury from "./Descfury";
import Productimg from "./Productimg";

class DescProduct extends Component {
    render() {
        return (
            <>
                     {this.props.furydata.map((fury) => {
            return (
              <>
                {this.props.rangenumone < fury.id &&fury.id < this.props.rangenumtwo && (
                  <Productimg
                  key={fury.id}
                    img={fury.img}
                    showDesc={this.props.showDesc}
                    id={fury.id}
                  />
                )}
              </>
            );
          })}
          {this.props.furydescdata.map((fury) => {
            return (
              <>
                {!this.props.isdescClose&& fury.id > this.props.rangenumone && fury.id < this.props.rangenumtwo && (
                  <Descfury
                   key={fury.id}
                    img={fury.img}
                    name={fury.name}
                    price={fury.price}
                    color={fury.color}
                    descone={fury.descone}
                    desctwo={fury.desctwo}
                    descthree={fury.descthree}
                    closeDesc={this.props.closeDesc}
                    id ={fury.id}
                    cartClick ={this.props.cartClick}
                  />
                )}
              </>
            );
          })}
            </>
        );
    }
}

export default DescProduct;