import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";

interface ShoppingListItem {
  id: string;
  title: string;
  checked: boolean;
}

export interface ShoppingListState {
  items: ShoppingListItem[]
}

const initialState: ShoppingListState = {
  items: []
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if(state.items.includes(action.payload)) {
        return
      }
      state.items.concat(action.payload)
    }
  },
});
