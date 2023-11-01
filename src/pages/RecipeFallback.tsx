import { NavLink } from "react-router-dom";

export function RecipeFallback() {
  return <div style={{ textAlign: 'center'}}>
    <h2 style={{marginBottom: '2rem'}}>Oops, this recipe doesn't exist yet</h2>
    <NavLink to='/' className='btn btn--large'>Go to all recipes</NavLink>
  </div>
}