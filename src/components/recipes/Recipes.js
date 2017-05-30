import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Recipes extends Component {
  render(){
    return(
        <div>
          <ul>

          {this.props.recipes.map((recipe, index)=>{
            return <li key={index}> name: {recipe.name} calories: {recipe.calories}</li>
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
