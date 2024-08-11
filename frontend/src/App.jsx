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
function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('/api/animals ')
    .then(response => {
      setAnimals(response.data);
    })
    .catch(error => {
      console.error(error);
      });
      
  })
  return (
    <div>
      <h1>Animals</h1>
      <p>Total Animals: {animals.length}</p>
      {animals.map((animal, index) => (
        <div key={index}>
          <h2>{animal.name}</h2>
          <p>Species: {animal.species}</p>
        </div>
        ))}
        </div>
  )
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
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/users" element={<Users />} />
        <Route path='/animals' element={<Animals />} />
      </Routes>
    </Router>
  );
}

export default App;
