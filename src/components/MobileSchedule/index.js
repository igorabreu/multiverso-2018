import React, { Component } from 'react'

import Activity from '../Activity'
import './style.scss'
import SliderPage from '../SliderPage'

class MobileSchedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 0,
    }
  }
  onClick = () => {
    this.setState({
      translate: this.state.translate - window.innerWidth,
    })
  }

  render() {
    const { translate } = this.state
    const { content } = this.props
    console.log(this.props)
    return (
      <div
        className="MobileSchedule"
        style={{ transform: `translateX(${translate}px)` }}
      >
        {content.map((slider, index) => {
          return <SliderPage key={index} {...slider} />
        })}
      </div>
    )
  }
}
export default MobileSchedule
