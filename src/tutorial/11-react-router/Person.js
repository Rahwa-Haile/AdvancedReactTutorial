import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(()=>{
    const newPerson = data.find((person) => person.id === Number(id));
    setName(newPerson.name)
  }, [])
  
  

  return (
    <div>
      <h3>{name}</h3>
      <Link to="/people">Back to people</Link>
    </div>
  );
};

export default Person;
