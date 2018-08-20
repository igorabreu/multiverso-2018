import React, { Component } from 'react'
import Animation from './Animation.js'
import './style.scss'

class BackgroundAnimation extends Component {
  componentDidMount() {
    Animation(this.refs.animationCanvas)
    window.addEventListener('resize', this.restartAnimation)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.restartAnimation)
  }

  restartAnimation = () => {
    Animation(this.refs.animationCanvas)
  }

  render() {
    return (
      <div className="BackgroundAnimation">
        <canvas ref="animationCanvas" />
      </div>
    )
  }
}
export default BackgroundAnimation
