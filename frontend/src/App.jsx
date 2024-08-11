import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function Fruits() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios.get('/api/fruits')
      .then(response => {
        setFruits(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Fruits</h1>
      <p>Total Fruits: {fruits.length}</p>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <h2>{fruit.name}</h2>
          <p>Color: {fruit.color}</p>
        </div>
      ))}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <p>Total Users: {users.length}</p>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Fruits</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
