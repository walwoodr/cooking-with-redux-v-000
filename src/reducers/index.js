import { combineReducers } from 'redux';
import ingredients from './ingredients';
import recipeForm from './recipeForm';
import recipes from './recipes';

const rootReducer = combineReducers({
  recipes,
  recipeForm,
  ingredients
})

export default rootReducer;
