import React from "react";
import "./css/assets.scss";

export default class Output extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {}
  render() {
    return (
      <div>
        <div className="alert bg-transparent" role="alert">
          <label>See your output below...</label>
          <div className="input-group input-group-lg">
            <textarea
              className="form-control"
              aria-label="With textarea"
              rows="10"
              value={this.props.value.output}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
