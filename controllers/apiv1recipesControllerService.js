'use strict'

module.exports.getRecipes = function getRecipes(req, res, next) {
  res.send([
    {
      recipeId: "g",
      description: "d",
      ingredients: "i",
      complexity: 1
    }
  ]);
};

module.exports.addRecipe = function addRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for addRecipe'
  });
};