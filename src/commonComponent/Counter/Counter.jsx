import React from 'react';
import './styles.css'

const Counter = ({countValue, parityType, handlePlusOne, handleMinusOne, handleResetCounter}) => {

  return (
    <div className='counter'>
      <div className='number'>
        {countValue}
      </div>
      <div className='isEven' >
        {parityType}
      </div>
      <div className="buttons">
        <button className='minus' onClick={handleMinusOne} >-</button>
        <button className='reset' onClick={handleResetCounter}>Reset</button>
        <button className='plus' onClick={handlePlusOne}>+</button>
      </div>
    </div>
  )
}

export default Counter