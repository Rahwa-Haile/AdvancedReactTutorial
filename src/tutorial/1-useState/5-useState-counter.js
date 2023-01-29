import React from 'react'

const UseStateCounter = () => {
    const [value, setValue] = React.useState(0)
    const resetValue = ()=>{
        setValue(0)
    }
    const complexIncrease = ()=>{
        setTimeout(()=>{
            setValue((prevState)=>{
                return prevState + 1
            })
        }, 2000)
        
    }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Random Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increment
        </button>
        <button type="button" className="btn" onClick={resetValue}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrement
        </button>
      </section>


      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={complexIncrease}
        >
          Increment Later
        </button>
       
        
      </section>
    </>
  );
}

export default UseStateCounter