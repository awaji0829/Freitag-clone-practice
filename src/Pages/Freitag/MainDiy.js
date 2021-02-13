import React, { Component } from 'react';

class MainDiy extends Component {
    render() {
        return (
            <div className="main-diy">
            <img
              alt="diy"
              className="main-diyimg"
              src="https://freitag.rokka.io/page-width/910134abdf49aec7b0d9489492fca138f0e211d1/freitag-store-gruengasse-f719mel-philipfrowein-02-crop.jpg"
            ></img>
            <div className="main-diytext">
              <h1>MAKE YOUR OWN F719 MEL</h1>
              <p>
                FREITAG의 신제품이 아직 완성단계를 기다리고 있습니다.
                <br />
                F-ederation멤버라면 직접 취리히의 gruengasse 스토어에서, 화상
                세션으로 이 새로운 제품을 완성해 보세요.
              </p>
              <div className="main-diybtn">지금 DIY세션을 예약하세요</div>
            </div>
          </div>
        );
    }
}

export default MainDiy;