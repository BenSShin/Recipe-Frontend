/* eslint-disable react/prop-types */

export function RecipeShow(props) {
  return (
    <div>
      {localStorage.jwt !== undefined ? (
        <>
          <div>
            <h1>Recipe Information</h1>
            <h2>{props.recipe.name}</h2>
            <p>Categories: </p>
            {props.recipe.categories.map((category) => (
              <div key={category.id}>
                <p>{category.name}</p>
              </div>
            ))}
            <img src={props.recipe.image_url} alt="image" />
            <p>Prep Time: {props.recipe.friendly_prep_time}</p>
            <p>Cook Time: {props.recipe.friendly_cook_time}</p>
            <p>Ingredients: {props.recipe.ingredients}</p>
            <p>Directions: {props.recipe.directions}</p>
            <p>Created: {props.recipe.friendly_created_at}</p>
            <button onClick={() => props.onShowUpdateRecipe(props.recipe)}>Update</button>
            <button onClick={() => props.onShowDeleteRecipe()}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>Recipe Information</h1>
            <h2>{props.recipe.name}</h2>
            <p>Categories: </p>
            {props.recipe.categories.map((category) => (
              <div key={category.id}>
                <p>{category.name}</p>
              </div>
            ))}
            <img src={props.recipe.image_url} alt="image" />
            <p>Prep Time: {props.recipe.friendly_prep_time}</p>
            <p>Cook Time: {props.recipe.friendly_cook_time}</p>
            <p>Ingredients: {props.recipe.ingredients}</p>
            <p>Directions: {props.recipe.directions}</p>
            <p>Created: {props.recipe.friendly_created_at}</p>
          </div>
        </>
      )}
    </div>
  );
}
