'use strict'

module.exports.findRecipeByrecipeId = function findRecipeByrecipeId(req, res, next) {
  res.send( {
    recipeId: "g",
    description: "d",
    ingredients: "i",
    complexity: 1
  });
};

module.exports.deleteRecipe = function deleteRecipe(req, res, next) {
  res.status(200).send("Ok");
};

module.exports.updateRecipe = function updateRecipe(req, res, next) {
  res.status(200).send("Ok");
};