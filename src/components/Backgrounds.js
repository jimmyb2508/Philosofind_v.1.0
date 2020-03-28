import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Backgrounds extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#282c34" };
  }

  changeColor = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
      // <div style={{ background: this.state.color }} id="main">
      //   {/* <Router>
      //     <div>
      //       <Link path="/" 
      //         onClick={() => this.changeColor("#282c34")}
      //         />
      //       <Link path="/ancient" 
      //         onClick={() => this.changeColor("#9c27b0")}
      //         />
      //       <Link path="/users/" 
      //         onClick={() => this.changeColor("#007bff")}
      //         />
      //     </div>
      //   </Router> */}
      // </div>
    );
  }
}

export default Backgrounds;