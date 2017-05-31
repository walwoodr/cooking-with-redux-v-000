import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from '../../actions/recipes';
import { ConnectedRecipes } from './Recipes';

export class RecipesInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories: '',
      ingredientIds: []
    }
  }

  onSubmit(event){
    event.preventDefault();
    this.props.addRecipe(this.state);
    this.setState({
      name: '',
      calories: '',
      ingredientIds: []
    })
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesChange(event){
    this.setState({
      calories: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <input type="text" value={this.state.name} placeholder="recipe name" onChange={(e)=>this.handleNameChange(e)} />
          <input type="text" value={this.state.calories} placeholder="calories in recipe" onChange={(e)=>this.handleCaloriesChange(e)} />
          <input type="submit" />
        </form>
        <ConnectedRecipes />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addRecipe: addRecipe }, dispatch)
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput);
