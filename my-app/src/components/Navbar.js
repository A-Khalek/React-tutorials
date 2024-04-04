import {NavLink} from 'react-router-dom'


export default function Navbar(){
    return(
        <nav>
            <ul>
                <li> <NavLink to="/" activeStyle={{fontWeight:'bold',color:'red'}} end>  Home</NavLink> </li>
                <li> <NavLink to="/about" activeStyle={{fontWeight:'bold',color:'red'}} end >About</NavLink> </li>
                <li> <NavLink to="/servics" activeStyle={{fontWeight:'bold',color:'red'}} end>  Servics</NavLink> </li>
            </ul>
        </nav>
    );
}