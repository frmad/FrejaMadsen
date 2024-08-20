import { Link } from "react-router-dom";
import './css/Navbar.css';
import './css/Colors.css';
const Navbar =()=>{
    return (
        <div>
            <nav className="top-navigation">
                <ul>
                    <li className="topnav-left">Freja Marie Madsen</li>
                    <div className="topnav-right">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/projects" className="nav-link">Projects</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li><Link to="/skills" className="nav-link">Skills</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;