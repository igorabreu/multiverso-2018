import React, { Component } from 'react'

import NavBarSchedule from '../NavBarSchedule'
import HeaderSchedule from '../HeaderSchedule'
import ContentSchedule from '../ContentSchedule'
import FooterSchedule from '../FooterSchedule'

import './style.scss'

class DesktopSchedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: 0,
    }
  }

  handleLocationSelect = index => {
    this.setState({
      currentLocation: index,
    })
  }

  render() {
    const { content } = this.props
    const { currentLocation } = this.state
    return (
      <div className="DesktopSchedule">
        <NavBarSchedule
          content={content}
          onClickLocation={index => this.handleLocationSelect(index)}
          currentLocation={currentLocation}
        />
        <div className="content">
          <HeaderSchedule {...content[currentLocation]} />
          <ContentSchedule content={content[currentLocation]} />
        </div>
        <FooterSchedule {...content[currentLocation]} />
      </div>
    )
  }
}
export default DesktopSchedule
