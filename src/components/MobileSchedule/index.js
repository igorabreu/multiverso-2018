import React, { Component } from 'react'

import './style.scss'
import SliderPage from '../SliderPage'

class MobileSchedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 0,
      totalWidth: 0,
    }
  }
  handleSwipeLeft = () => {
    const { translate, totalWidth } = this.state
    if (translate - window.innerWidth === totalWidth * -1) {
      return
    }
    this.setState({
      translate: translate - window.innerWidth,
    })
  }

  handleSwipeRight = () => {
    const { translate } = this.state
    if (translate === 0) {
      return
    }
    this.setState({
      translate: translate + window.innerWidth,
    })
  }

  componentDidMount() {
    const { content } = this.props
    this.setState({
      totalWidth: window.innerWidth * content.length,
    })
  }

  render() {
    const { translate } = this.state
    const { content } = this.props
    return (
      <div
        className="MobileSchedule"
        style={{ transform: `translateX(${translate}px)` }}
      >
        {content.map((slider, index) => {
          return (
            <SliderPage
              key={index}
              {...slider}
              onSwipeLeft={() => this.handleSwipeLeft()}
              onSwipeRight={() => this.handleSwipeRight()}
            />
          )
        })}
        <div
          className="instructions"
          style={{ transform: `translateX(${translate * -1}px)` }}
        >
          {'< Deslize para ver outros locais >'}
        </div>
      </div>
    )
  }
}
export default MobileSchedule
