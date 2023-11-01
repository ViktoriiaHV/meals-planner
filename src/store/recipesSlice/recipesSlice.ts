import { createSlice } from "@reduxjs/toolkit";
import { RECIPES, type Recipe } from "../../constants/recipes"; 

interface recipesState {
  recipeList: Recipe[], 
  searchKeyword: '',
  filteredRecipes: Recipe[]
}

const initialState: recipesState = {
  recipeList: RECIPES,
  searchKeyword: '',
  filteredRecipes: []
}

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    }
  },
});
export const { setSearchKeyword } =
recipesSlice.actions;

export default recipesSlice.reducer;
