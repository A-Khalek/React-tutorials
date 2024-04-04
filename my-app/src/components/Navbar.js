import {NavLink} from 'react-router-dom'


export default function Navbar(){
    return(
        <nav>
            <ul>
                <li> <NavLink to="/">  Home</NavLink> </li>
                <li> <NavLink to="/about" >About</NavLink> </li>
                <li> <NavLink to="/servics">  Servics</NavLink> </li>
                <li> <NavLink to="/post/:category/:subcategory">  Post</NavLink> </li>
                <li> <NavLink to="/login">  Login</NavLink> </li>
            </ul>
        </nav>
    );
}