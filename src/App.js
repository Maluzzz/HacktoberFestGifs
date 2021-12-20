import React from "react"
import logo from "./logo.png"
import * as names from "./names"
import "./App.css"

function App() {

  return (
    <div className="App">
      <img alt="hacktober-logo" src={logo} style={{padding:'40px'}} />
      {Object.keys(names).map((person, i) => (
        <UserCard key={names[person].gif + i} {...names[person]} />
      ))}
    </div>
  )
}

const UserCard = ({gif, skills, name}) => {
  return (
    <div>
      <div className="card">
        <div className="border"></div>
        <img src={gif} alt={name + "gif"} />
        <h1>
          <p className='card-color-0'>{name}</p>
          <p className='card-color-0'>{skills}</p>
        </h1>
      </div>
    </div>
  )
}
export default App
