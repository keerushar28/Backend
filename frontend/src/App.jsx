import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [fruits, setFruits] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    axios.get('/api/fruits')
    .then(response => {
      setFruits(response.data);
    })
    .catch(error => {
      console.error(error);
      });

    
  })

  return (
    <>
      <h1>Hello, world!</h1>
      <div>
      <p>Total Fruits: {fruits.length}</p> {/* Corrected typo: 'lenght' to 'length' */}
      {
        fruits.map((fruit, index) => (
          <div key={index}> {/* If 'name' is not unique, using 'index' as key */}
            <h2>{fruit.name}</h2>
            <p>Color: {fruit.color}</p>
          </div>
        ))
      }
      </div>
      
    </>
  )
}

export default App



