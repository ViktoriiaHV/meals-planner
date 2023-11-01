import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../components/Checkbox";
import RootState from "../store";
import { checkItem, removeItem, renameItem } from "../store/shoppingListSlice/shoppingListSlice";

export function ShoppingList() {
  const shoppingList = useSelector((state: RootState) => state.shoppingList.items);
  const dispatch = useDispatch()

  function handleOnCheck() {

  }
  function handleInputChange(id: any, newValue: string) {
    dispatch(renameItem(({id, newValue})))
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
                <input type='text' readOnly className="shopping__input" value={item.title} onChange={(e) => handleInputChange(item.id, e.target.value)} />
                <button className="btn btn--small" onClick={() => dispatch(removeItem(item.id))}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
