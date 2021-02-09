import React from "react";

import "./Login.scss";
// import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { id: "", password: "", color: "rgb(185, 216, 256)" };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  checkInput = () => {
    if (this.state.id.includes("@") && this.state.password.length > 4) {
      this.setState({ color: "blue" });
    }
    if (!this.state.id || !this.state.password) {
      this.setState({ color: "rgb(185, 216, 256)" });
    }
  };
  checkValidation = () => {
    if (this.state.id.includes("@") && this.state.password.length > 4) {
      this.props.history.push("/main");
    } else {
      alert("형식이 올바르지 않습니다");
    }
    console.log(this.state.id);
    console.log(this.state.password);
  };

  render() {
    return (
      <div className="Login">
        <div className="background">
          <div className="container">
            <span className="westatitle">westagram</span>
            <input
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              id="idform"
              name="id"
              onChange={this.handleInput}
              onKeyUp={this.checkInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="passwordform"
              name="password"
              onChange={this.handleInput}
              onKeyUp={this.checkInput}
            />
            <button
              type="button"
              id="loginbtn"
              onClick={this.checkValidation}
              style={{ background: this.state.color }}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
