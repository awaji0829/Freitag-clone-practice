import React, { Component } from 'react';
import Descfury from "./Descfury";
import Productimg from "./Productimg";

class DescProduct extends Component {
    render() {
      const {furydata,rangenumone,rangenumtwo,showDesc,closeDesc,cartClick,isdescClose,furydescdata}= this.props;
        return (
            <>
                     {furydata.map((fury) => {
            return (
              <>
                {rangenumone < fury.id &&fury.id < rangenumtwo && (
                  <Productimg
                  key={fury.id}
                    img={fury.img}
                    showDesc={showDesc}
                    id={fury.id}
                  />
                )}
              </>
            );
          })}
          {furydescdata.map((fury) => {
            return (
              <>
                {!isdescClose&& fury.id > rangenumone && fury.id < rangenumtwo && (
                  <Descfury
                   key={fury.id}
                    img={fury.img}
                    name={fury.name}
                    price={fury.price}
                    color={fury.color}
                    descone={fury.descone}
                    desctwo={fury.desctwo}
                    descthree={fury.descthree}
                    closeDesc={closeDesc}
                    id ={fury.id}
                    cartClick ={cartClick}
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