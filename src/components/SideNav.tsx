export function SideNav(){
    return <nav className="side-nav">
        <ul className="side-nav__list">
            <li className="side-nav__list-item">
                <a  className='side-nav__link'href="#">Recipes</a>
            </li>
            <li className="side-nav__list-item">
                <a className='side-nav__link' href="#">Shopping List</a>
            </li>
            <li className="side-nav__list-item">
                <a className='side-nav__link' href="#">Planner</a>
            </li>
        </ul>
    </nav>
}