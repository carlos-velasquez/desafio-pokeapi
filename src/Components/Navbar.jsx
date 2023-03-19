import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {

    const setActive = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <div className='navbar'>
            <Nav>
                <NavLink className={setActive} to="/">
                    HOME
                </NavLink>
                {' - '}
                <NavLink className={setActive} to="/pokemon">
                    POKEMON
                </NavLink>
            </Nav>
        </div>
        
    )
}

export default Navbar;