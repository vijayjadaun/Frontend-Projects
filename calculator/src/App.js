import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleDelete = () => {
    let deletedString = this.state.value.slice(0, this.state.value.length - 1);
    this.setState({ value: deletedString });
  };

  handleClear = () => {
    this.setState({ value: "" });
  };

  handleResult = () => {
    let display = this.state.value;
    try {
      // eslint-disable-next-line
      let result = eval(display);
      this.setState({ value: result });
    } catch (error) {
      this.setState({ value: "ERROR" });
    }
  };

  manageInput = (value) => {
    let exp = this.state.value;
    exp += value;
    this.setState({ value: exp });
  };

  render() {
    return (
      <div className="Calculator">
        
        <input className="Display" value={this.state.value} readOnly />
        <div className="Buttons">
          <button
            className="Btn"
            onClick={this.handleClear}
            style={{ backgroundColor: "darkgray" }}
          >
            C
          </button>
          <button className="Btn" onClick={() => this.manageInput("**")} style={{ backgroundColor: "darkgray" }}>
            ^
          </button>
          <button
            className="Btn"
            onClick={() => this.manageInput("%")}
            style={{ backgroundColor: "darkgray" }}
          >
            %
          </button>
          <button
            className="Btn"
            onClick={() => this.manageInput("/")}
            style={{ backgroundColor: "#f78d6c" }}
          >
            /
          </button>
          <button className="Btn" onClick={() => this.manageInput("7")}>
            7
          </button>
          <button className="Btn" onClick={() => this.manageInput("8")}>
            8
          </button>
          <button className="Btn" onClick={() => this.manageInput("9")}>
            9
          </button>
          <button
            className="Btn"
            onClick={() => this.manageInput("*")}
            style={{ backgroundColor: "#f78d6c" }}
          >
            x
          </button>
          <button className="Btn" onClick={() => this.manageInput("4")}>
            4
          </button>
          <button className="Btn" onClick={() => this.manageInput("5")}>
            5
          </button>
          <button className="Btn" onClick={() => this.manageInput("6")}>
            6
          </button>
          <button
            className="Btn"
            onClick={() => this.manageInput("-")}
            style={{ backgroundColor: "#f78d6c" }}
          >
            -
          </button>
          <button className="Btn" onClick={() => this.manageInput("3")}>
            3
          </button>
          <button className="Btn" onClick={() => this.manageInput("2")}>
            2
          </button>
          <button className="Btn" onClick={() => this.manageInput("1")}>
            1
          </button>
          <button
            className="Btn"
            onClick={() => this.manageInput("+")}
            style={{ backgroundColor: "#f78d6c" }}
          >
            +
          </button>
          <button className="Btn" onClick={() => this.manageInput("0")}>
            0
          </button>
          <button className="Btn" onClick={() => this.manageInput(".")}>
            .
          </button>
          <button className="Btn" onClick={this.handleDelete}>
            Del
          </button>
          <button
            className="Btn"
            onClick={this.handleResult}
            style={{ backgroundColor: "#ff5f6d" }}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
