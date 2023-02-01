import React from 'react'

const ShortCircuit = () => {
    const [text, setText] = React.useState('')
  return (
    <div>
        <>
            <h1>{text || 'First value'}</h1>
            {text && <h1>Second value</h1>}
            {!text && <h1>Third value</h1>}
        </>
    </div>
  )
}

export default ShortCircuit