import React from 'react'

import './style.scss'

const HeaderSchedule = ({ locationName, activityCategory, weekDays }) => (
  <div className="HeaderSchedule">
    <h1 className="location-name">{locationName}</h1>
    <h1 className="category">{activityCategory}</h1>
    <h1 className="week-days">{weekDays}</h1>
  </div>
)

export default HeaderSchedule
