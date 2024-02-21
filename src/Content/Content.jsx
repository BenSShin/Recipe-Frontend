import { Home } from "../Home/Home";
import { RecipeIndex } from "../Recipe/RecipeIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeNew } from "../Recipe/RecipeNew";
import { SignUp } from "../Authentication/SignUp";
import { Login } from "../Authentication/Login";
import { RecipeShow } from "../Recipe/RecipeShow";
import { Header } from "../Header";
import { Route, Routes } from "react-router-dom";

export function Content() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});

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

  const handleShowRecipe = (recipe) => {
    setCurrentRecipe(recipe);
  };

  useEffect(handleIndexRecipes, []);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Home />
      <Routes>
        <Route
          path="/recipes"
          element={
            <>
              <RecipeNew onCreateRecipe={handleCreateRecipe} />
              <RecipeIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route path="/recipe" element={<RecipeShow recipe={currentRecipe} />} />
      </Routes>
    </main>
  );
}
