import {NavLink} from "react-router-dom";
import './css/Navbar.css';
import './css/Colors.css';
const Navbar =()=>{
    return (
        <div>
            <nav className="top-navigation">
                <ul>
                    <li className="topnav-left">Freja Marie Madsen</li>
                    <div className="topnav-right">
                        <li><NavLink to="/" className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></li>
                        <li><NavLink to="/projects" className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Projects</NavLink></li>
                        <li><NavLink to="/courses" className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Courses</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink></li>
                        <li><NavLink to="/skills" className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Skills</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;