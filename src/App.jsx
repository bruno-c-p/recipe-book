import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import {useTheme} from "./hooks/useTheme.jsx";

import ThemeSelector from "./components/ThemeSelector/ThemeSelector.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from './pages/home/Home.jsx';
import Create from './pages/create/Create.jsx';
import Search from './pages/search/Search.jsx';
import Recipe from './pages/recipe/Recipe.jsx';

import './App.css'

function App() {
  const { mode } = useTheme();

  return (
      <div className={`App ${mode}`}>
        <Router>
          <Navbar />
          <ThemeSelector />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path={"/recipes/:id"} element={<Recipe />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App
