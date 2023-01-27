import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState('Kira')
  const clickHandler = () => {
    if(text==='Kira'){
      setText("Jack");
    }
    else{
      setText('Kira')
    }
      
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={clickHandler}>Change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
