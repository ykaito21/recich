import React, { Component } from "react";

class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for recipe with{" "}
                <strong className="text-danger">Food2Fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes separated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken, onions, ..."
                    className="form-control"
                    onChange={handleChange}
                    value={search}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-primary text-white"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeSearch;
