import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      handleChange,
      handleSubmit,
      search,
      error,
      isLoading
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch
          handleChange={handleChange}
          search={search}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* title end */}
          {isLoading ? (
            <h3 className="text-ifo text-center">Loading...</h3>
          ) : error ? (
            <h1 className="text-danger text-center">{error}</h1>
          ) : (
            <div className="row">
              {recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={handleDetails}
                  />
                );
              })}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeList;
