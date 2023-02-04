import React, { useState, useReducer } from "react";
import Modal from "./modal";
import { data } from "../../data";

const Index = () => {
  const reducer = (action, state)=>{

  }

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
  }
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      
    } else {
      
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
      <form className="form" onSubmit={handleSubmit}>
        
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="btn" type='submit'>Add</button>
        
      </form>
      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
