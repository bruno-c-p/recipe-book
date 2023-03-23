import {BrowserRouter as Router, Routes, Route, NavLink, Navigate} from "react-router-dom";
import { useState } from 'react';

import Home from './pages/home/Home.jsx';
import Create from './pages/create/Create.jsx';
import Search from './pages/search/Search.jsx';
import Recipe from './pages/recipe/Recipe.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <Router>
          <nav>
            <h1>My articles</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
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
