import express from "express"
import _ from "lodash"

import Recipe from "../../../models/Recipe.js"

const recipesRouter = new express.Router()

recipesRouter.get("/", (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ recipes: Recipe.findAll() })
})

recipesRouter.get("/random", (req, res) => {
  const recipes = Recipe.findAll()
  const randomRecipe = _.sample(recipes)
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ recipe: randomRecipe })
})

recipesRouter.get("/longest", (req, res) => {
  const recipes = Recipe.findAll();
  let longestRecipe = "";
  recipes.forEach((recipe) => {
    console.log(`recipe.name: ${recipe.name}`);
    console.log(`Longest Recipe: ${longestRecipe}`);
    if(recipe.name.length > longestRecipe.length){
      longestRecipe = recipe.name
    }
  })
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ recipe: longestRecipe })
})

export default recipesRouter