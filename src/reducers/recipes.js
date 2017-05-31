import uuidV4  from 'uuid/v4';

export default function recipe(state = [], action){
  switch (action.type) {
    case 'ADD_RECIPE':
      let recipe = Object.assign({}, action.payload, {id: uuidV4()});
      return state.concat(recipe)
    case 'ADD_INGREDIENT':
      // building the new recipe object
      let findRecipe = state.find((element)=>{return element.id === action.recipeId});
      console.log(findRecipe);
      let newRecipe = Object.assign({}, findRecipe, {ingredientIds: findRecipe.ingredientIds.concat(action.ingredientId)});
      //removing the old recipe object
      let idx = state.indexOf(findRecipe);
      let newState = [].concat(state.slice(0,idx), state.slice(idx+1, state.length))
      //adding the new recipe object
      return newState.concat(newRecipe);
    default:
      return state;
  }
}
