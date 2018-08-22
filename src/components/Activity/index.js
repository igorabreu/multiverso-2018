import React from 'react'

import './style.scss'

const Activity = ({ date, activityTitle, proponent }) => (
  <div className="Activity">
    <div className="date">{date}</div>
    <div className="activity-title">{activityTitle}</div>
    <div className="proponent">{proponent}</div>
  </div>
)

export default Activity
