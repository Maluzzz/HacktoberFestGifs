import React from 'react';
import {logo} from './logo.png'
import * as names from './names';
import './App.css';


function App() {
  console.log(names)
  return (
    <div className="App">
        <img src={logo} />
      <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet'></link>
      {Object.keys(names).map(person => {
        return (
          <div class="card-column column-0">
            <div class="card card-color-0">
              <div class="border"></div>
              <img src={names[person].gif} />
              <h1>{names[person].name} <br /><p>{names[person].skills}</p></h1>
            </div>
          </div>)
      })}
    </div>
  );
}
const styles = {
  cell: {
    padding: '10px',
    margin: '10px',
    textAlign: 'left',
  }
}
export default App;
