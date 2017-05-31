import React, { Component } from 'react';
import {createIngredient} from '../../actions/ingredients'
import {connect} from 'react-redux';
import {ConnectedIngredients} from './Ingredients';
import {bindActionCreators} from 'redux';

export class IngredientsInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createIngredient(this.state);
    this.setState({name: '', calories: ''});
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleCaloriesChange(e){
    this.setState({
      calories: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type='text' value={this.state.name} onChange={(e)=>this.handleNameChange(e)} placeholder="ingredient name"/>
          <input type='text' value={this.state.calories} onChange={(e)=>this.handleCaloriesChange(e)} placeholder="calories in ingredient"/>
          <input type="submit" />
        </form>
        <ConnectedIngredients />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {ingredients: state.ingredients}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createIngredient: createIngredient }, dispatch)
}

export const ConnectedIngredientsInput = connect(mapStateToProps, mapDispatchToProps)(IngredientsInput)
