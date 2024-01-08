import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import RandomSprout from './RandomSprout'
import SproutsIndex from './SproutsIndex'
import LongestRecipe from './LongestRecipe'

const App = (props) => {
  const [recipe, setRecipe] = useState("")
  const [recipes, setRecipes] = useState([])
  const [longestRecipe, setLongestRecipe] = useState("");
  const [displayedSection, setDisplayedSection] = useState({
    showRandomRecipe: false,
    showAllRecipes: false,
    showLongestRecipe: false
  });

  const getRandomRecipe = async () => {
    // YOUR FETCH CALL HERE
    const fetchedRecipe = await fetch("/api/v1/recipes/random");
    console.log("fetchedRecipe:", fetchedRecipe);
    const recipeConvertedToJSON = await fetchedRecipe.json();
    console.log("recipe converted to JSON:", recipeConvertedToJSON.recipe);
    setRecipe(recipeConvertedToJSON.recipe);
  }

  const getAllRecipes = async () => {
    // YOUR FETCH CALL HERE
    const fetchedRecipes = await fetch("/api/v1/recipes");
    console.log("Fetched Recipes Data:",fetchedRecipes);
    const jsonConvertedData = await fetchedRecipes.json();
    console.log("Fetched Data Converted to JSON: ", jsonConvertedData);
    const recipesArrayFromJSONData = jsonConvertedData.recipes;
    console.log(recipesArrayFromJSONData);
    setRecipes(recipesArrayFromJSONData);
  }

  const getLongestRecipe = async () => {
    const fetchedRecipe = await fetch("/api/v1/recipes/longest");
    console.log(fetchedRecipe);
    const recipeConvertedToJSON = await fetchedRecipe.json()
    console.log(recipeConvertedToJSON.recipe)
    setLongestRecipe(recipeConvertedToJSON.recipe)
  }

  const handleRandomClick = () => {
    setDisplayedSection({
      showRandomRecipe: true,
      showAllRecipes: false,
      showLongestRecipe: false
    })
    setRecipes([]);
    setLongestRecipe("");
  }

  const handleIndexClick = () => {
    setDisplayedSection({
      showRandomRecipe: false,
      showAllRecipes: true,
      showLongestRecipe: false 
    })
    setRecipe("");
    setLongestRecipe("");
  }

  const handleLongestRecipe = () => {
    setDisplayedSection({
      showRandomRecipe: false,
      showAllRecipes: false,
      showLongestRecipe: true 
    })
    setRecipe("");
    setRecipes([]);
  }

  useEffect(() => {
    if(displayedSection.showRandomRecipe){
      getRandomRecipe();
    }
    if(displayedSection.showAllRecipes){
      getAllRecipes();
    }
    if(displayedSection.showLongestRecipe){
      getLongestRecipe();
    }
  }, [displayedSection])




  return(
    <div className="container">
      <h1>Sprout Fetcher</h1>
      <RandomSprout
        recipe={recipe}
      />
      <SproutsIndex
        recipes={recipes}
      />

      <LongestRecipe
        recipe={longestRecipe}
      />
      <div className="buttons">
        <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>
        <button onClick={handleIndexClick} className="btn">See All Recipes</button>
        <button onClick={handleLongestRecipe} className='btn'>See Longest Recipe</button>
      </div>
    </div>
  )
}

export default hot(App)
