import React from "react";
import "./css/assets.scss";
import Input from "./input";
import Options from "./options";

export default class App extends React.Component {
  // your Javascript goes here

  render() {
    return (
      <div className="w-100 p-3">
        <button type="button" className="btn btn-secondary btn-lg btn-block">
          Sentlate
        </button>
        <p></p>
        <div>
          <Input />
          <p></p>
          <br />
          <br />
          <Options />
          <br />
        </div>
      </div>
    );
  }
}
