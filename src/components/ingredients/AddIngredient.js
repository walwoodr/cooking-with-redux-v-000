import React, { Component } from 'react';

export class AddIngredient extends Component {
  render(){
    return(
      <div>
        {this.props.ingredient.name}
      </div>
    )
  }
}

export const ConnectedAddIngredient = AddIngredient
