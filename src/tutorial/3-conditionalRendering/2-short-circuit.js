import React from 'react'

const ShortCircuit = () => {
    const [text, setText] = React.useState('')
    const [isError, setIsError] = React.useState(false)
  return (
    <div>
        <>
            <h1>{text || 'First value'}</h1>
            <button className='btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
            {isError && <h1>Error..</h1>}
            {isError ? <h1>There is an error</h1> : <h1>There is no error</h1>}
            {/* {text && <h1>Second value</h1>}
            {!text && <h1>Third value</h1>} */}
        </>
    </div>
  )
}

export default ShortCircuit