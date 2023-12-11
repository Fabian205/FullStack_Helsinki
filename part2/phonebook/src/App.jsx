/*---------------------------------------------------
 |     2.6 - 2.17: Course information               |                                          
 ---------------------------------------------------*/

import { useState, useEffect, useRef } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";
//import axios from "axios";
import personService from "./services/persons";
import Notification from "./component/Notification";

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [confirmaction, setConfirmaction] = useState("");
  const [error, setError] = useState("");

  /* useEffect(() => {
    //console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      //console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []); */

  const hook = () => {
    //axios.get("http://localhost:3001/persons").then((response) => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
    //setPersons(response.data);
  };
  useEffect(hook, []);
  //console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();

    // Check if the name has more than 2 characters
    if (newPerson.length <= 2) {
      //alert("Name must have more than 2 characters");
      setConfirmaction(
        `Person validation failed: name '${newPerson}' is shorter than the minimun allowed lenght (3)`
      );
      setTimeout(() => {
        setConfirmaction(null);
      }, 5000);
      //setPersons(persons.filter((n) => n.id !== id));
      return;
    }

    const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1,
    };

    if (
      persons.some(
        (persons) => persons.name === newPerson && persons.number === newNumber
      )
    ) {
      //console.log("alert");
      alert(`${newPerson} is already added to phonebook`);
      setNewPerson("");
      setNewNumber("");
      inputRef.current.focus();
    } else if (
      persons.some(
        (persons) => persons.name === newPerson && persons.number !== newNumber
      )
    ) {
      const existingPerson = persons.find(
        (persons) => persons.name === newPerson && persons.number !== newNumber
      );
      //console.log(existingPerson.name);
      //alert(`${newPerson} is already added to phonebook, replace the older numbrer with a new one?`);
      if (
        window.confirm(
          `${newPerson} is already added to phonebook, replace the old numbrer with a new one?`
        )
      ) {
        //console.log(newNumber);
        handleUpdateNumber(existingPerson.id, newPerson, newNumber);
        setNewPerson("");
        setNewNumber("");
        inputRef.current.focus();
        setConfirmaction(
          `The number '${newNumber}' has been updated to '${newPerson}`
        );
        setTimeout(() => {
          setConfirmaction(null);
        }, 5000);
        //setPersons(persons.filter((n) => n.id !== id));
      }
    } else {
      //console.log("save here");
      personService.create(personObject).then((returnetPerson) => {
        setPersons(persons.concat(returnetPerson));
        setNewPerson("");
        setNewNumber("");
        setConfirmaction(
          `This contact '${newPerson}' '${newNumber}' has been added to phonebook`
        );
        setTimeout(() => {
          setConfirmaction(null);
        }, 5000);
        //setPersons(persons.filter((n) => n.id !== id));
      });
    }
  };

  const filteredPerson = persons.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleUpdateNumber = (id, newPerson, newNumber) => {
    personService
      .update(id, { name: newPerson, number: newNumber })
      .then((updatePerson) => {
        setPersons(
          persons.map((person) => (person.id === id ? updatePerson : person))
        );               
      });
  };

  const handleRemove = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setConfirmaction(`The '${name}' has been removed from server`);
          setTimeout(() => {
            setConfirmaction(null);
          }, 5000);
        })
        .catch((error) => {
          setError(error,
            `The information of '${name}' has already been removed from server`
          );
          setTimeout(() => {
            setError(null);
          }, 5000);
        });
      setPersons(persons.filter((n) => n.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={confirmaction} messageError={error} />

      <Filter value={filter} onChange={handleFilterChange} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        inputRef={inputRef}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPerson} onRemove={handleRemove} />
    </div>
  );
};

export default App;

//npm run dev
//npm run server
