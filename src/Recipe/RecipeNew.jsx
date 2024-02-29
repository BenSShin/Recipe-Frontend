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
      <form>
        <section>
          <p>Category:</p>
          <label htmlFor="Dessert">Dessert</label>
          <input type="checkbox" name="Dessert" />
          <label htmlFor="Drink">Drink</label>
          <input type="checkbox" name="Drink" />
          <label htmlFor="Gluten Free">Gluten Free</label>
          <input type="checkbox" name="Gluten Free" />
          <label htmlFor="Keto">Keto</label>
          <input type="checkbox" name="Keto" />
          <label htmlFor="Salad">Salad</label>
          <input type="checkbox" name="Salad" />
          <label htmlFor="Side">Side</label>
          <input type="checkbox" name="Side" />
          <label htmlFor="Vegetarian">Vegetarian</label>
          <input type="checkbox" name="Vegetarian" />
          <label htmlFor="Vegan">Vegan</label>
          <input type="checkbox" name="Vegan" />
        </section>
      </form>
    </div>
  );
}
