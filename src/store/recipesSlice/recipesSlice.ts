import { createSlice } from "@reduxjs/toolkit";
import { RECIPES, type Recipe } from "../../constants/recipes"; 

interface recipesState {
  recipeList: Recipe[], 
  searchKeyword: '',
}

const initialState: recipesState = {
  recipeList: RECIPES,
  searchKeyword: '',
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
