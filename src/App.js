import React, {useState} from 'react'

import './App.css';
import Lightsabers from './Lightsabers'


function App() {
  const [collection, setCollection] = useState(Lightsabers)
  const bgRed = { backgroundColor: 'red' }
  const bgGreen = { backgroundColor: 'green' }

  //console.log(lightsabers)

  function toggle(){
    // const update = {on: !prevState.on}
    setCollection(prevState => [...prevState, {on: !prevState.on}] )
  }
  
  const showCollection = collection.map(saber => (
    <div className="sabers" key={saber.id}>
      <p>{saber.name}</p>
      <p>{saber.color}</p>
      <p style={saber.on ? bgRed : bgGreen } onClick={toggle}>{saber.on ? 'WATCH OUT' : 'ITS FINE'}</p>
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
