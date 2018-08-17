import React, { Component } from 'react'
import Animation from './Animation.js'
import './style.scss'

class BackgroundAnimation extends Component {
  componentDidMount() {
    Animation(this.refs.animationCanvas)
    window.addEventListener('resize', Animation(this.refs.animationCanvas))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', Animation(this.refs.animationCanvas))
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
