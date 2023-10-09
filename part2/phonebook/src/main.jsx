import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const persons = [
  {
    id: 1,
    name: 'Erick Parra',
    number: "099868856",
  },
  {
    id: 2,
    name: 'Ronny Parra',
    number: "0955645123"
  },
  {
    id: 3,
    name: 'Samantha Parra',
    number: "0998564514"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App persons={persons}/>
  </React.StrictMode>,
)
