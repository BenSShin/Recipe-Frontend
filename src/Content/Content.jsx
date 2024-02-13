import { Home } from "../Home/Home";
import { RecipeIndex } from "../Recipe/RecipeIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeNew } from "../Recipe/RecipeNew";

export function Content() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      setRecipes(response.data);
    });
  };

  const handleCreateRecipe = (params, successCallback) => {
    console.log("handleCreateRecipe", params);
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      setRecipes([...recipes, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <>
      <Home />
      <RecipeIndex recipes={recipes} />
      <RecipeNew onCreateRecipe={handleCreateRecipe} />
    </>
  );
}
