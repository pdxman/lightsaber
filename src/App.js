import React, {useState} from 'react'

import './App.css';
import Lightsabers from './Lightsabers'


function App() {
  const [collection, setCollection] = useState(Lightsabers)
  const bgRed = { backgroundColor: 'red' }
  const bgGreen = { backgroundColor: 'green' }

  //console.log(lightsabers)

  // function toggle(){
  //   setCollection(prevState => [...prevState, {on: !prevState.on}] )
  // }

  const togglePower = (index) => {
    const newCollection = [...collection]
    newCollection[index].on = !newCollection[index].on
    setCollection(newCollection)
  }
  
  const showCollection = collection.map((saber, index) => (
    <div className="sabers" key={saber.id}>
      <p>{saber.name}</p>
      <p>{saber.color}</p>
      <p style={saber.on ? bgRed : bgGreen} onClick={() => togglePower(index)}>
        {saber.on ? 'WATCH OUT' : 'ITS FINE'}
      </p>
    </div>
  ))

  return (
    <div className="App">
      <h1>Lightsabers!</h1>
      {showCollection}
    </div>
  );
}

export default App;
