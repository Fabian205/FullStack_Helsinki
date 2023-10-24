/*---------------------------------------------------
 |    3.1: Phonebook backend step1                  |
 |     3.2: Phonebook backend step2                 |
 |     3.3: Phonebook backend step3                 |
 |     3.4: Phonebook backend step4                 |
 |     3.5: Phonebook backend step5                 |
 |     3.6: Phonebook backend step6                 |
 |     3.7: Phonebook backend step7                 |  
 |     3.8*: Phonebook backend step8                |                      
 |     3.9 phonebook backend step9                  |
 |     3.10 phonebook backend step10                |
 ---------------------------------------------------*/


const express = require("express");
const morgan = require("morgan");

const app = express();

// Define a new token for morgan
morgan.token('postData', (req) => {
  return JSON.stringify(req.body);
});

// Middleware for logging with morgan, including the request body
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'));

//app.use(morgan('tiny'));

const cors = require('cors')

app.use(cors())

app.use(express.json());

let persons = [
  { id: 1, name: "Ronny Parra", number: "0988011616" },
  { id: 2, name: "Erick Parra", number: "0988511121" },
  { id: 3, name: "Samantha Parra", number: "0998264721" },
  { id: 4, name: "Rodrigo Parra", number: "0954178956" },
  { id: 5, name: "Fabian Aguilar", number: "0954178957" },
];

app.get("/", (request, response) => {
  response.end("<h1>Hello World!</h1>");
});


app.get("/info", (request, response) => {
  request.requestTime = new Date();
  // Build response
  const entries = persons.length;
  const resp = `
    <p>Request Time: ${request.requestTime}</p>
    <p>PhoneBook has info to ${entries} people</p>
  `;
  // Enviar la respuesta al cliente
  response.send(resp);
});


app.get("/api/persons", (request, response) => {
  //response.json(persons)
  request.header("Content-Type", "application/json");
  response.end(JSON.stringify(persons, null, 2));
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});


app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).json("ok")
})

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }else if (persons.some(person => person.name===body.name)) {
    return response.status(400).json({
      error: "error: 'name must be unique",
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,  
  };

  persons = persons.concat(person);
  response.json(person);
});

app.delete("/api/person/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).json("ok");
});



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Deploy to fly.io
//configure port, .gitignore y .env
//iwr https://fly.io/install.ps1 -useb | iex
//fly launch
//fly deploy

//https://nodeexpress.fly.dev/