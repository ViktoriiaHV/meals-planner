import MealLogo from '../images/meal.png'

export function Header(){
    return <header className="header">
        <div className="header__wrapper">
            <div className="header__logo-wrapper">
                <img src={MealLogo} alt="meal-logo" className='header__logo'/>
                <h1>Meals Planner</h1>
            </div>
            <input className="header__search" type='text' placeholder='Search'/>
            <div className="header__account">Account</div>
        </div>
    </header>
}