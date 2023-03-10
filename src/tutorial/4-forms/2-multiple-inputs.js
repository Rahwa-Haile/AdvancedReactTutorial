import React, { useState } from "react";

const MultipleInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({...person, [name]:value})
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(person.firstName && person.age && person.email){
        const newPerson = {...person, id: new Date().getTime().toString()}
        setPeople((people)=>{
            return [...people, newPerson]
        })
        setPerson({firstName: '', age: '', email: ''})
    }
    else{
        console.log('empty values')
    }
  }

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          console.log(people);
          const { id, age, firstName, email } = person;
          console.log(person)
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
