import React, { Component } from 'react';
import './styles.css';
import Counter from '../Counter/Counter'

class Container extends Component {

  constructor(props) {

    super(props);

    this.state = {

      countValue: 0,
      parityType: 'The number is even'
    }

  }

  plusOne = () => {
    this.setState({ countValue: this.state.countValue + 1 })
  }

  minusOne = () => {
    this.setState({ countValue: this.state.countValue - 1 })
  }

  resetCounter = () => {
    this.setState({ countValue: 0 })
  }

  checkParity = () => {
    this.setState({ parityType: this.state.countValue % 2 === 0 ? 'The number is even' : 'The number is odd' })
  }

  render() {
    return (
      <div className='wrapper'>
        <Counter
          countValue={this.state.countValue}
          parityType={this.state.parityType}
          plusOne={this.plusOne}
          minusOne={this.minusOne}
          resetCounter={this.resetCounter}
          checkParity={this.checkParity}
        />
      </div>
    )
  }

}

export default Container

