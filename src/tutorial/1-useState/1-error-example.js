import React from 'react'

const ErrorExample = () => {
    let title = 'random title'
    const handleClick = ()=>{
        title = 'Hello world'
        alert(title)
    }
  return (
    <React.Fragment>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>
  )
}

export default ErrorExample