/* eslint-disable react/prop-types */
export function RecipeUpdate(props) {
  return (
    <>
      <div>
        <h1>Update Recipe</h1>
        <p>{props.recipe.username}</p>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" defaultValue={props.recipe.name} />
        <label htmlFor="prep_time">Prep Time: </label>
        <input type="text" name="prep_time" defaultValue={props.recipe.prep_time} />
        <label htmlFor="cook_time">Cook Time: </label>
        <input type="text" name="cook_time" defaultValue={props.recipe.cook_time} />
        <label htmlFor="ingredients">Ingredients: </label>
        <input type="text" name="ingredients" defaultValue={props.recipe.ingredients} />
        <label htmlFor="directions">Directions: </label>
        <input type="text" name="directions" defaultValue={props.recipe.directions} />
      </div>
    </>
  );
}
