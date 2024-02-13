/* eslint-disable react/prop-types */
export function RecipeShow(props) {
  return (
    <div>
      <h1>Recipe Information</h1>
      <p>{props.recipe.image_url}</p>
      <p>Prep Time: {props.recipe.friendly_prep_time}</p>
      <p>Cook Time: {props.recipe.friendly_cook_time}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Directions: {props.recipe.directions}</p>
    </div>
  );
}
