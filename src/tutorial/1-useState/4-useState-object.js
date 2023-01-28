import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "peter",
    age: "25",
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>

      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
