import React, { Component } from 'react'
import MobileSchedule from '../../components/MobileSchedule'

import content from './content.js'
import './style.scss'

class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
        <MobileSchedule content={content} />
      </div>
    )
  }
}
export default Schedule
