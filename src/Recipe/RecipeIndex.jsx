/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function RecipeIndex(props) {
  return (
    <div>
      <h1>All Recipes</h1>
      <div>
        {props.recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>Prep Time: {recipe.friendly_prep_time}</p>
            <p>Cook Time: {recipe.friendly_cook_time}</p>
            <Link to="/recipe">
              <button onClick={() => props.onShowRecipe(recipe)}>Recipe Info</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
