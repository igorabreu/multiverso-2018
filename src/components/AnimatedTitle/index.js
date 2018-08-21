import React, { Component } from 'react'
import anime from 'animejs'

import './style.scss'

class AnimatedTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      count: 0,
    }
  }

  updateNumber = number => {
    this.setState({
      number,
    })
  }

  componentDidMount() {
    this.handleNumberAnimation()
    //navigator.geolocation.getCurrentPosition(position => console.log(position))
  }

  handleNumberAnimation = () => {
    var objectNumber = {
      numberCount: 0,
    }
    let lastNumber
    anime({
      targets: objectNumber,
      numberCount: 100,
      duration: 3000,
      round: 1,
      easing: 'easeInQuart',
      update: () => {
        const { numberCount } = objectNumber
        if (numberCount === lastNumber) return
        const newNumber = this.generateRandomInt(1000000000, 8999999999)
        this.updateNumber(newNumber + numberCount)
        lastNumber = numberCount
      },
    })
  }

  generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {
    const { number } = this.state
    const { big } = this.props
    return (
      <div
        className={big ? 'AnimatedLogo' : 'AnimatedLogoSmall'}
        onClick={this.handleNumberAnimation}
      >
        <h1 className="logo-word"> Multiverso</h1>
        <h1 className="logo-number">{number}</h1>
      </div>
    )
  }
}
export default AnimatedTitle
