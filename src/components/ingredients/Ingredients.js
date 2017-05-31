import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Ingredients extends Component {
  render(){
    const ingredients = this.props.ingredients.map((ingredient, index)=>{
      return <li key={index}>{ingredient.name} ({ingredient.calories} calories)</li>
    })
    return(
        <div>
          <ul>
            {ingredients}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {ingredients: state.ingredients}
}

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)
