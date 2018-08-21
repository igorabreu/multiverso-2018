import React, { Component } from 'react'
import anime from 'animejs'

import './style.scss'

class AnimatedGraphism extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blackPoints: [
        {
          top: 0,
          left: 15,
        },
        {
          top: 10,
          left: 25,
        },
        {
          top: 30,
          left: 5,
        },
      ],
    }
  }

  generatePositions = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5
  }

  generatePoints = () => {
    let newPoints = []
    for (let i = 0; i < 10; i++) {
      newPoints.push({
        top: this.generatePositions(0, 45),
        left: this.generatePositions(0, 45),
      })
    }
    this.setState({
      blackPoints: newPoints,
    })
  }

  componentDidMount() {
    setInterval(() => this.generatePoints(), 3000)
  }

  render() {
    const { blackPoints } = this.state
    return (
      <div className="AnimatedGraphism">
        {blackPoints.map((point, index) => {
          return (
            <div key={index} style={{ top: point.top, left: point.left }} />
          )
        })}
      </div>
    )
  }
}
export default AnimatedGraphism
