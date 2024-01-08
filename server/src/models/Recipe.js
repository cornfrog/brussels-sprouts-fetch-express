import fs from "fs"

const recipesPath = "recipes.json"

class Recipe {
  constructor(name) {
    this.name = name
  }

  static findAll() {
    const recipeData = JSON.parse(fs.readFileSync(recipesPath)).recipes
    let recipes = []
    recipeData.forEach(recipe => {
      const newRecipe = new Recipe(recipe)
      recipes.push(newRecipe)
    })
    return recipes
  }
}

export default Recipe