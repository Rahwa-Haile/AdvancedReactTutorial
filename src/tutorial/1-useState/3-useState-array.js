import React, {useState} from 'react'
import {data} from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id)=>{
    const newNames = people.filter((person)=> id !== person.id)
    setPeople(newNames)
  }
  return (
    <>
      {people.map((person)=>{
        const {id, name} = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={()=>removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={()=>setPeople([])}>Clear Items</button>
    </>
  )
}

export default UseStateArray