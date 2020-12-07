import React from 'react';
import './styles.css'

const Counter = ({countValue, parityType, plusOne, minusOne, resetCounter, checkParity}) => {

  parityType = countValue % 2 === 0 ? 'The number is even' : 'The number is odd'

  return (
    <div className='counter'>
      <div className='number'>
        {countValue}
      </div>
      <div className='isEven'>
        {parityType}
      </div>
      <div className="buttons">
        <button className='minus' onClick={minusOne} >-</button>
        <button className='reset' onClick={resetCounter}>Reset</button>
        <button className='plus' onClick={plusOne}>+</button>
      </div>
    </div>
  )
}

export default Counter