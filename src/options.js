import React from "react";
import "./css/assets.scss";

export default class Options extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      frequency: "",
      emojis: "",
      sentiment: "",
      sentimentVal: "",
      sentimentButton: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.setOutput = this.setOutput.bind(this);
    this.setFrequency = this.setFrequency.bind(this);
    this.setEmojis = this.setEmojis.bind(this);
    this.setSentiment = this.setSentiment.bind(this);
  }
  handleChange(event) {}
  setOutput() {
    this.setState({ output: this.props.value.output });
  }
  setFrequency() {
    this.setState({ frequency: this.props.value.frequency });
  }
  setEmojis() {
    this.setState({ emojis: this.props.value.emojis });
  }
  setSentiment() {
    this.setState({ sentiment: this.props.value.sentiment });
    if (this.props.value.sentiment > 1) {
      this.setState({ sentimentVal: "+ve" });
      this.setState({ sentimentButton: "alert alert-success" });
    } else {
      this.setState({ sentimentVal: "-ve" });
      this.setState({ sentimentButton: "alert alert-danger" });
    }
  }

  render() {
    return (
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div>
          <div className="btn-group mr-5" role="group">
            <button type="button" className="btn btn-success">
              Summary
            </button>

            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-light"
                data-toggle="modal"
                data-target="#exampleModalScrollable"
                onClick={this.setOutput}
              >
                Click to view summary
              </button>

              <div
                className="modal fade"
                id="exampleModalScrollable"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalScrollableTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-scrollable"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalScrollableTitle"
                      >
                        Summary
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" onChange={this.handleChange}>
                      {this.state.output}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-success">
            Frequency
          </button>
          <div className="btn-group mr-5" role="group">
            <button
              type="button"
              className="btn btn-light"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={this.setFrequency}
            >
              Click to view frequency
            </button>

            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Frequency (scroll right to view more data...)
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body" onChange={this.handleChange}>
                    {this.state.frequency}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="btn-group mr-5" role="group">
            <button type="button" className="btn btn-success">
              Emojis
            </button>

            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-light"
                data-toggle="modal"
                data-target="#staticBackdrop"
                onClick={this.setEmojis}
              >
                Click to view emojis
              </button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-backdrop="static"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Emojis
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" onChange={this.handleChange}>
                      {this.state.emojis}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="btn-group mr-5" role="group">
            <button type="button" className="btn btn-success">
              Sentiment
            </button>

            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-light"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={this.setSentiment}
              >
                Click to view sentiment
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Sentiment
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" onChange={this.handleChange}>
                      {this.state.sentiment}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
