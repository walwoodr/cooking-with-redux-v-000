import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {
  constructor(props){
    super(props);

    let unselectedIngredients = this.props.ingredients.filter((ingredient)=>{return !this.props.selectedIngredients.includes(ingredient.id)});

    this.state = {
      selectedIngredients: this.props.selectedIngredients,
      unselectedIngredients: unselectedIngredients
    }
  }

  render(){
    console.log("unselected Ingredients");
    console.log(this.state.unselectedIngredients);
    return(
      <div>
      // go through the ingredients prop
      //assign the selected and unselected ingredients to state based on the selectedIngredients prop
      // display selected ingredients as bullets
      // display unselected ingredients with add button
        <ul>{
          this.state.selectedIngredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.name} ({ingredient.calories} calories)</li>
          })
        }
        {
          this.state.unselectedIngredients ? this.state.unselectedIngredients.map((ingredient, index) => {
            return <ConnectedAddIngredient ingredient={ingredient} key={index} recipe={this.props.recipe} />
          }) : ''
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients}
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
