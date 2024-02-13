/* eslint-disable react/prop-types */
export function RecipeNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRecipe(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            Recipe Name: <input name="name" type="text" />
          </div>
          <div>
            Image URL: <input name="image_url" type="text" />
          </div>
          <div>
            Prep Time: <input name="prep_time" type="text" />
          </div>
          <div>
            Cook Time: <input name="cook_time" type="text" />
          </div>
          <div>
            Directions: <input name="directions" type="text" />
          </div>
          <div>
            ingredients: <input name="ingredients" type="text" />
          </div>
          <button type="submit">Create Recipe</button>
        </div>
      </form>
    </div>
  );
}
