import React from "react";
import "./css/assets.scss";
import Output from "./output";
import Options from "./options";

export const outputValue = "";

export default class Input extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Input",
      output: "",
      frequency: "",
      emojis: "",
      sentiment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  submitInput() {
    const inputText = this.state.inputValue;
    const input = inputText;

    var client = Algorithmia.client("simITYeMiL/Q0xcxqNBy8oM5ma71");
    client
      .algo("nlp/Summarizer/0.1.8?timeout=300") // timeout is optional
      .pipe(input)
      .then(output => {
        this.setState({ output: output.result });
      });

    client
      .algo("mtman/SentimentAnalysis/0.1.1?timeout=300")
      .pipe(input)
      .then(output => {
        this.setState({ sentiment: output.result });
      });

    client
      .algo("jhurliman/Text2Emoji/0.1.1?timeout=300")
      .pipe(input)
      .then(output => {
        this.setState({ emojis: output.result });
      });

    client
      .algo("diego/WordFrequencyCounter/0.2.0?timeout=300")
      .pipe(input)
      .then(output => {
        this.setState({ frequency: output.result });
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
        <p></p>
        <br />
        <Options />
      </div>
    );
  }
}
