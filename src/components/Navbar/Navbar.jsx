import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme.jsx";

import Searchbar from "../Searchbar/Searchbar.jsx";

import './Navbar.css';

export default function Navbar() {
    const { color, changeColor } = useTheme();
    return (
        <div className="navbar" style={{ background: color }}>
            <nav onClick={() => changeColor('pink')}>
                <Link to="/" className="brand">
                    <h1>Recipe book</h1>
                </Link>
                <Searchbar />
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    );
}