import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {
  render = () => {
    var selectedIngredients =  this.props.ingredients.filter((ingredient)=>{return this.props.recipe.ingredientIds.includes(ingredient.id)});
    var unselectedIngredients = this.props.ingredients.filter((ingredient)=>{return !this.props.recipe.ingredientIds.includes(ingredient.id)});

    return(
      <div>
        <ul>{
          selectedIngredients ? selectedIngredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.name} ({ingredient.calories} calories)</li>
          }) : ''
        }
        {
          unselectedIngredients ? unselectedIngredients.map((ingredient, index) => {
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
