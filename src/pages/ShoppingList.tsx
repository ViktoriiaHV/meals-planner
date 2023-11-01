import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../components/Checkbox";
import type RootState from "../store";
import {
  checkItem,
  removeItem,
  addItem,
} from "../store/shoppingListSlice/shoppingListSlice";

export function ShoppingList() {
  const shoppingList = useSelector(
    (state: RootState) => state.shoppingList.items
  );
  const dispatch = useDispatch();

  function handleInputChange(value: string) {
    dispatch(addItem(value));
  }

  return (
    <div className="shopping__container">
      <div className="shopping__list">
        <h2>Main List</h2>
        {shoppingList?.length < 1 && <h3>Your shopping list is empty</h3>}
        <ul className="shopping__items">
          {shoppingList.map((item) => {
            return (
              <li key={item.id}>
                <Checkbox
                  id={item.id}
                  value={item.title}
                  checked={item.checked}
                  onChange={() => dispatch(checkItem(item.id))}
                />
                <input
                  type="text"
                  readOnly
                  className="shopping__input"
                  value={item.title}
                />
                <button
                  className="btn btn--small"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  X
                </button>
              </li>
            );
          })}
          <NewItem onNewItem={handleInputChange} />
        </ul>
      </div>
    </div>
  );
}

function NewItem({ onNewItem }: { onNewItem: (value: string) => void }) {
  const [value, setValue] = useState<string>("");

  const addNewItem = () => {
    if (value.trim().length < 1) return;
    onNewItem(value);
    setValue("");
  };

  return (
    <>
      <input
        autoFocus
        style={{ marginLeft: "2.1rem", marginRight: '2px' }}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="shopping__input"
        onBlur={addNewItem}
        onKeyDown={(e) => (e.key === "Enter" ? addNewItem() : null)}
      />
      <button className="btn btn--small" onClick={addNewItem}>
        +
      </button>
    </>
  );
}
