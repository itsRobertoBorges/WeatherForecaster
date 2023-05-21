import { ReactDOM, React } from 'react'

const Navbar = () => {
    return(
        <nav className="navbar">
            <img alt='weather-logo' src='/images/nav-icon.png'></img>
            <h1>Weather Forecast</h1>
            <h4>Created by: Roberto Borges</h4>
        </nav>
    )
}

export default Navbar;