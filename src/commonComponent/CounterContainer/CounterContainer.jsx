import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import './styles.css';

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

      countValue: 0,
      parityType: 'The number is even'

    }
    
  }

  handlePlusOne = () => {
    this.setState({ countValue: this.state.countValue + 1 });
    this.checkParity()
  }

  handleMinusOne = () => {
    this.setState({ countValue: this.state.countValue - 1 });
    this.checkParity()
  }

  handleResetCounter = () => {
    this.setState({ countValue: 0 });
    this.checkParity()
  }

  checkParity = () => {
    const checkParityResult = this.state.countValue % 2 === 0 ? 'The number is odd' : 'The number is even';
    this.setState({parityType: checkParityResult});
  }

  render() {

    return (
      <div className='wrapper'>
        <Counter
          countValue={this.state.countValue}
          parityType={this.state.parityType}
          handlePlusOne={this.handlePlusOne}
          handleMinusOne={this.handleMinusOne}
          handleResetCounter={this.handleResetCounter}
        />
      </div>
    )
  }

}

export default CounterContainer

