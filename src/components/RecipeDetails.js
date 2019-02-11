import React, { Component } from "react";
import { recipe } from "../tempDetails";

class RecipeDetails extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=41d6f7ea0e52626f592be6d89795bcb&rId=${
  //       this.props.id
  //     }`
  //   };
  // }

  // async componentDidMount() {
  //   await fetch(this.state.url)
  //     .then(data => data.json())
  //     .then(recipeData => {
  //       this.setState({
  //         recipe: recipeData.recipe
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  state = {
    recipe: recipe
  };
  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=e41d6f7ea0e52626f592be6d89795bcb&rId=${
      this.props.id
    }`;
    await fetch(url)
      .then(data => data.json())
      .then(recipeData => {
        this.setState(
          (state, props) => {
            return { recipe: recipeData.recipe };
          },
          () => {}
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    const { handleIndex } = this.props;
    return (
      <div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <button
                  type="button"
                  className="btn btn-warning mb-5 text-capitalize"
                  onClick={() => handleIndex(1)}
                >
                  back to recipe
                </button>
                <img src={image_url} alt="recipe" className="d-block w-100" />
              </div>
              {/* detail */}
              <div className="col-10 mx-auto col-md-6 my-3">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className="text-warning text-capitalize text-slanted">
                  provided by {publisher}
                </h6>
                <a
                  href={publisher_url}
                  className="btn btn-primary mt-2 text-capitalize"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  publisher webpage
                </a>
                <a
                  href={source_url}
                  className="btn btn-success mt-2 text-capitalize mx-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  recipe url
                </a>
                <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4">ingredients</h2>
                  {ingredients.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item text-slanted">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default RecipeDetails;
