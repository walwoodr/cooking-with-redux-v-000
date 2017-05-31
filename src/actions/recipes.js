export function addIngredient(ingredientId, recipeId){
  return {
    type: 'ADD_INGREDIENT',
    ingredientId: ingredientId,
    recipeId: recipeId
  }
}

export function addRecipe(recipe){
  return {
    type: 'ADD_RECIPE',
    payload: recipe
  }
}
