import React, { Component } from "react";
// import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { Route, Switch } from "react-router-dom";
import Default from "./components/Default";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    recipes: [],
    url:
      "https://www.food2fork.com/api/search?key=e41d6f7ea0e52626f592be6d89795bcb",
    base_url:
      "https://www.food2fork.com/api/search?key=e41d6f7ea0e52626f592be6d89795bcb",
    details_id: 35382,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: "",
    isLoading: true
  };

  getRecipes = async () => {
    await fetch(this.state.url)
      .then(data => data.json())
      .then(recipeData => {
        console.log(recipeData.recipes);

        if (recipeData.recipes.length === 0) {
          this.setState({
            error: "sorry we have no recipe with your keyword"
          });
        } else {
          this.setState({
            recipes: recipeData.recipes,
            isLoading: false
          });
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    // this.getRecipes();
  }

  // diplayPage = index => {
  //   switch (index) {
  //     default:
  //     case 1:
  //       return (
  //         <RecipeList
  //           recipes={this.state.recipes}
  //           handleDetails={this.handleDetails}
  //           handleChange={this.handleChange}
  //           handleSubmit={this.handleSubmit}
  //           search={this.state.search}
  //           error={this.state.error}
  //         />
  //       );
  //     case 0:
  //       return (
  //         <RecipeDetails
  //           id={this.state.details_id}
  //           handleIndex={this.handleIndex}
  //         />
  //       );
  //   }
  // };

  // handleIndex = index => {
  //   this.setState({
  //     pageIndex: index
  //   });
  // };

  // handleDetails = (index, id) => {
  //   this.setState({
  //     details_id: id,
  //     pageIndex: index
  //   });
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState({ url: `${base_url}${query}${search}, search:""` }, () =>
      this.getRecipes()
    );
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <RecipeList
                recipes={this.state.recipes}
                // handleDetails={this.handleDetails}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                search={this.state.search}
                error={this.state.error}
                isLoading={this.state.isLoading}
              />
            )}
          />
          <Route
            path="/detail"
            render={() => (
              <RecipeDetails
                id={this.state.details_id}
                // handleIndex={this.handleIndex}
                isLoading={this.state.isLoading}
              />
            )}
          />
          <Route component={Default} />
        </Switch>

        {/* {this.diplayPage(this.state.pageIndex)} */}
      </React.Fragment>
    );
  }
}

export default App;
