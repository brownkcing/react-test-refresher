import React, { Component } from "react";
import Table1 from "./component/Table";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table1 />
      </div>
    );
  }
}

export default App;
