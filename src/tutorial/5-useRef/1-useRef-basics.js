import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(refContainer.current.value);
      console.log(divContainer.current)
    };
    useEffect(()=>{
        refContainer.current.focus()
        console.log(refContainer.current)
    })
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}></div>
    </>
  );
};

export default UseRefBasics;
