import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import About from './routes/About';
import Projects from './routes/Projects';
import Courses from './routes/Courses';
import Home from './routes/Home';
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";


function App() {
    // Use useLocation hook to get current path
    //let location = useLocation();


    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </div>
    );
}

export default App;
