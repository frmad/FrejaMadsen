import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Navbar from './Navbar';
import About from './routes/About';
import Projects from './routes/Projects';
import Home from './routes/Home';
import Recipes from "./routes/Projects/RecipesProject/Recipes";


function App() {
    // Use useLocation hook to get current path
    let location = useLocation();

    // Determine if Navbar should be hidden based on current path
    const hideNavbar = location.pathname === '/recipes';

    return (
        <div className="App">
            {!hideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/recipes" element={<Recipes />} />
            </Routes>
        </div>
    );
}

export default App;
