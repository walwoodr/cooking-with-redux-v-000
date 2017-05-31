import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addIngredient } from '../../actions/recipes';

export class AddIngredient extends Component {

  handleClick(event){
    this.props.addIngredient(this.props.ingredient.id, this.props.recipe.id);
  }

  render(){
    return(
      <div>
        {this.props.ingredient.name} <button onClick={(e)=>{this.handleClick(event)}}>Add to recipe</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {ingredients: state.ingredients}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addIngredient: addIngredient
  }, dispatch)
}

export const ConnectedAddIngredient = connect(mapStateToProps, mapDispatchToProps)(AddIngredient)
