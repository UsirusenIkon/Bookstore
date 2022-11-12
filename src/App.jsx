import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import { FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='nav-items flex'>
          <h1>Bookstore CMS</h1>
          <ul>
            <li><Link to="/">Books</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
          </ul>
        </div>
        <div className='icon'><FaUser /></div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
