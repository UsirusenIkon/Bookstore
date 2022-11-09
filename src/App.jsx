import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';


function App() {
  return (
    <div className="App">
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/Categories">Categories</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
