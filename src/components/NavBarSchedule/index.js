import React, { Component } from 'react'

import './style.scss'

class NavBarSchedule extends Component {
  render() {
    const { content, onClickLocation, currentLocation } = this.props
    return (
      <div className="NavBarSchedule">
        {content.map((item, index) => {
          return (
            <div
              className={`locationName ${
                currentLocation === index ? `selected` : ``
              }`}
              key={index}
              onClick={() => onClickLocation(index)}
            >
              {item.locationName}
            </div>
          )
        })}
      </div>
    )
  }
}
export default NavBarSchedule
