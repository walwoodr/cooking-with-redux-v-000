import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredients } from '../ingredients/AddIngredients';

export class Recipes extends Component {
  render(){
    return(
        <div>
          <ul>

          {this.props.recipes.map((recipe, index)=>{
            return <li key={index}> name: {recipe.name} ({recipe.calories} calories) <ConnectedAddIngredients selectedIngredients={recipe.ingredientIds} recipe={recipe} /></li>
          })}
          </ul>
        </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { recipes: state.recipes }
};

export const ConnectedRecipes = connect(mapStateToProps)(Recipes);
