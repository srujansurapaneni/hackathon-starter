import React from "react";
import "./css/assets.scss";
import Output from "./output";

export const outputValue = "";

export default class Input extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = { inputValue: "Input", output: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  submitInput() {
    const inputText = this.state.inputValue;
    const input = inputText;
    Algorithmia.client("simITYeMiL/Q0xcxqNBy8oM5ma71")
      .algo("mtman/SentimentAnalysis/0.1.1?timeout=300") // timeout is optional
      .pipe(input)
      .then(output => {
        this.setState({ output: output.result });
      });
  }
  render() {
    return (
      <div>
        <Output outputValue={this.state.output} />
        <div className="alert bg-transparent" role="alert">
          <label>Input text below...</label>
          <div className="input-group input-group-lg">
            <textarea
              className="form-control"
              aria-label="With textarea"
              rows="5"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />

            <div className="input-group-prepend">
              <button
                type="button"
                className="btn btn-info"
                onClick={this.submitInput}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
