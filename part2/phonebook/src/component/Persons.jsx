import React from "react";

const Persons = ({ persons }) => {
  return (
    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
      {persons.map((person) => (
        <li style={{ marginBottom: "5px" }} key={person.id}>
          {person.name}{" "}{person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;