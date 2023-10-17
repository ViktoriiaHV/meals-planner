import { Checkbox } from "../components/Checkbox"

export function ShoppingList(){
  const dummyShoppingList = ['tomatoes', 'apples', 'pears']
  return <div className="shopping-list">
    <h3>Your shopping list is empty</h3>
    <h3>Shopping list</h3>
    <ul>
      {dummyShoppingList.map(item => {
        return <li>
          <Checkbox id={item} value={item} checked={false} onChange={() => {}}/>
          {item}
        </li>
      })}
    </ul>
  </div>
}