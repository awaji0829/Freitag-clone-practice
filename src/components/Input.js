import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                 <input
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              id="idform"
              name="id"
              onChange={this.prop}
            />
            </div>
        );
    }
}

export default Input;