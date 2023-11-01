import { createSlice } from "@reduxjs/toolkit";

function createNewItem(title: string): ShoppingListItem {
  return { id: title, title, checked: false };
}

interface ShoppingListItem {
  id: string;
  title: string;
  checked: boolean;
}

export interface ShoppingListState {
  items: ShoppingListItem[];
}

const DUMMY_ITEMS = [
  {
    id: "1",
    title: "Tomato",
    checked: false,
  },
  {
    id: "2",
    title: "Onion",
    checked: false,
  },
  {
    id: "3",
    title: "Mint",
    checked: true,
  },
];

const initialState: ShoppingListState = {
  // items: []
  items: DUMMY_ITEMS,
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.items.find((item) => item.title === action.payload)) {
        return;
      }
      state.items = state.items.concat(createNewItem(action.payload));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    checkItem: (state, action) => {
      state.items.map(item => item.id === action.payload ? item.checked = !item.checked : item);
    },
    renameItem: (state, action) => {
      const { id, value } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      console.log(itemIndex);
      state.items[itemIndex].title = value;
    },
  },
});
export const { addItem, removeItem, checkItem, renameItem } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
