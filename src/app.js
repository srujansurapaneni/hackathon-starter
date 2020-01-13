import React from "react";
import "./css/assets.scss";

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
          <div className="alert alert-secondary" role="alert">
            <div className="input-group input-group-lg">
              <textarea
                className="form-control"
                aria-label="With textarea"
                rows="10"
              >
                Output
              </textarea>
            </div>
          </div>
          <div className="alert bg-transparent" role="alert">
            <div className="input-group input-group-lg">
              <textarea
                className="form-control"
                aria-label="With textarea"
                rows="5"
              >
                Input
              </textarea>
              <div className="input-group-prepend">
                <button type="button" className="btn btn-info">
                  Submit
                </button>
              </div>
            </div>
            <p></p>
            <br />
            <br />
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group mr-5"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-success">
                  Translate
                </button>

                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-light dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    choose language
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop1"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button type="button" className="btn btn-success">
                  Summarize
                </button>
              </div>
              <div className="input-group mr-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-success">
                  Emojis
                </button>
              </div>
              <div className="input-group mr-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
              <div className="btn-group" role="group" aria-label="Fourth group">
                <button type="button" className="btn btn-success">
                  Sentiment
                </button>
              </div>
              <div className="input-group mr-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
              <div className="btn-group" role="group" aria-label="Fourth group">
                <button type="button" className="btn btn-danger">
                  - ve
                </button>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}