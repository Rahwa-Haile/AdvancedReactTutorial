import React, { useState, useReducer } from "react";
import Modal from "./modal";
import { data } from "../../data";

const Index = () => {
  const reducer = (state, action)=>{
    if(action.type==='ADD_ITEM'){
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added'
      }
    }
    if(action.type==='NO_VALUE'){
      return{
        ...state,
        isModalOpen: true,
        modalContent: 'Please Enter a Value'
      }
    }
    if(action.type==='CLOSE_MODAL'){
      return{
        ...state, isModalOpen: false
      }
    }
    throw new Error('No matching action type')
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
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newItem})
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  };

  const closeModal = ()=>{
    dispatch({type: 'CLOSE_MODAL'})
  }
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
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
