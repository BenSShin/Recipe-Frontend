import { useState, useEffect } from "react";
import axios from "axios";

export function RecipeIndex() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <h1>All Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>Prep Time: {recipe.friendly_prep_time}</p>
            <p>Cook Time: {recipe.friendly_cook_time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
