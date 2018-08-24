import React from 'react'

import MobileSchedule from '../../components/MobileSchedule'
import DesktopSchedule from '../../components/DesktopSchedule'

import content from './content.js'
import './style.scss'

const Schedule = () => (
  <div className="Schedule" id="schedule">
    <MobileSchedule content={content} />
    <DesktopSchedule content={content} />
  </div>
)

export default Schedule
