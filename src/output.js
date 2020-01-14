import React from "react";
import "./css/assets.scss";
import outputValue from "./input";

export default class Output extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = { outputValue: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ outputValue: this.props.outputValue });
  }
  render() {
    return (
      <div>
        <label>See your output below...</label>
        <div className="alert bg-transparent" role="alert">
          <div className="input-group input-group-lg">
            <textarea
              className="form-control"
              aria-label="With textarea"
              rows="10"
              value={this.props.outputValue}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
