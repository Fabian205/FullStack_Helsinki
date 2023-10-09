/*---------------------------------------------------
 |     2.6 - 2.10: Course information               |                                          
 ---------------------------------------------------*/

import { useState, useEffect, useRef } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";

const App = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [persons, setPersons] = useState(props.persons);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1,
    };

    if (persons.some((persons) => persons.name === newPerson)) {      
      alert(`${newPerson} is already added to phonebook`);
      setNewPerson("");
      setNewNumber("");
      inputRef.current.focus();
    } else {
      setPersons(persons.concat(personObject));
      setNewPerson("");
      setNewNumber("");
      inputRef.current.focus();
    }
  };

  const filteredPerson = persons.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={filteredPerson} />
    </div>
  );
};

export default App;
