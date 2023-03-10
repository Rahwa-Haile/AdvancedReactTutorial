import React, {useState} from "react";

const UseStateObject = () => {
  // const [person, setPerson] = React.useState({
  //   name: "peter",
  //   age: "25",
  //   message: "random message",
  // });
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')
  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
