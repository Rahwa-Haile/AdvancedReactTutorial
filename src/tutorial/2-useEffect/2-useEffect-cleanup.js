import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = ()=>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    // return ()=>{
    //     console.log('clean up')
    //     window.removeEventListener('resize', checkSize)
    // }
  }, [])
  console.log('render')
  return (
    <>
      <h2>Window</h2>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
