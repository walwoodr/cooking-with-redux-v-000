import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AddIngredient} from './AddIngredient';

export class AddIngredients extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIngredients: '',
      unselectedIngredients: '',
      ingredients: ''
    }
  }

  render(){
    return(
      <div>
          {
            this.props.ingredients.map((ingredient, index) => {
              return <AddIngredient ingredient={ingredient} key={index} />
            })
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients}
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
