import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../store/recipesSlice/recipesSlice";

export function Search() {
  const dispatch = useDispatch();
  function setSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if(value.trim().length > 0) {
      dispatch(setSearchKeyword(value))
    }
  }
  return <input className="header__search" type="text" placeholder="Search" onChange={setSearchQuery}/>
}