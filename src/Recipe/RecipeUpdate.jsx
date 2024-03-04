/* eslint-disable react/prop-types */
export function RecipeUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRecipe(props.recipe.id, params, () => event.target.reset());
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onAddCategory(params, () => event.target.reset());
  };

  return (
    <>
      <div>
        <h1>Update Recipe</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Update</button>
        </form>
        <form onSubmit={handleAdd}>
          <section>
            <h3>Category:</h3>
            <p>Add the recipe to a category.</p>
            <input type="hidden" name="recipe_id" value={props.recipe.id} />
            <label htmlFor="categories">Add a Category</label>
            <select name="categories">
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Keto">Keto</option>
              <option value="Salad">Salad</option>
              <option value="Side">Side</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
            <button type="submit">Add Categories</button>
          </section>
        </form>
      </div>
    </>
  );
}
