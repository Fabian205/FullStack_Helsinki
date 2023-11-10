import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from "axios";
import "./App.css";

//ojo npm run server

/* const persons = [
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
] */

/* const promise = axios.get('http://localhost:3001/persons')
promise.then(response => {
  console.log(promise);
  console.log(response)
}) */

axios.get("http://localhost:3001/persons").then((response) => {
  const persons = response.data;
  //console.log(persons);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
