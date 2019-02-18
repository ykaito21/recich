import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-capitalize pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h4 className="pt-5">
              please check your URL "
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              "{" "}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
