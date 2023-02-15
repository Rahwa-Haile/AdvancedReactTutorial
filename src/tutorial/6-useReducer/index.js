import React, { useState, useReducer } from "react";
import Modal from "./modal";
import { data } from "../../data";
import {reducer} from './reducer'

const Index = () => {
  

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
            <button onClick={()=>dispatch({type: 'REMOVE_ITEM', payload: person.id})}>remove</button>
          </div>
        )
      })}
    </>
  )
}

export default Index;
