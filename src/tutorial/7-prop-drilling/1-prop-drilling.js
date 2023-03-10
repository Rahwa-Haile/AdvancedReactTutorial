import React, { useState } from "react";
import {data} from "../../data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id)=>{
    setPeople((people)=>{
        return people.filter((person)=>id !== person.id)
    })
  }
  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </>
  );
};

const List = ({people, removePerson})=>{
    return(
        <>
        {people.map((person) => {
           return <SinglePerson key={person.id} removePerson={removePerson} {...person}/>
        })}
        </>
    )
}

const SinglePerson = ({id, name, removePerson})=>{
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={()=> removePerson(id)}>remove</button>
    </div>
}

export default PropDrilling;
