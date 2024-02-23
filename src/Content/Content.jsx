import { Home } from "../Home/Home";
import { RecipeIndex } from "../Recipe/RecipeIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeNew } from "../Recipe/RecipeNew";
import { SignUp } from "../Authentication/SignUp";
import { Login } from "../Authentication/Login";
import { RecipeShow } from "../Recipe/RecipeShow";
import { Route, Routes } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { RecipeUpdate } from "../Recipe/RecipeUpdate";

export function Content() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isRecipeUpdateVisible, setIsRecipeUpdateVisible] = useState(false);

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

  const handleShowUpdateRecipe = (recipe) => {
    setIsRecipeUpdateVisible(true);
    setCurrentRecipe(recipe);
  };
  const handleCloseUpdate = () => {
    setIsRecipeUpdateVisible(false);
  };

  const hanldeUpdateRecipe = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
      setCurrentRecipe(response.data);
      successCallback();
      handleCloseUpdate();
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/recipes"
          element={
            <>
              <RecipeNew onCreateRecipe={handleCreateRecipe} />
              <RecipeIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
            </>
          }
        />
        <Route
          path="/recipe"
          element={
            <>
              <Modal show={isRecipeUpdateVisible} onClose={handleCloseUpdate}>
                <RecipeUpdate recipe={currentRecipe} onUpdateRecipe={hanldeUpdateRecipe} />
              </Modal>
              <RecipeShow recipe={currentRecipe} onShowUpdateRecipe={handleShowUpdateRecipe} />
            </>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
