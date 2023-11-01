import { configureStore } from "@reduxjs/toolkit";
import ShoppingListReducer from "./shoppingListSlice/shoppingListSlice";

// const initialState = {
//   recipes: [],
//   shoppingList: {
//     lists: [],
//     currentList: 0,
//   }
// }

export const store = configureStore({
  reducer: {
    shoppingList: ShoppingListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
export default RootState;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
