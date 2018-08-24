import React from 'react'
import AnimatedTitle from '../AnimatedTitle'

import './style.scss'

const FooterSchedule = ({ addressInfo, classification, entryInfo }) => (
  <div className="FooterSchedule">
    <div className="informations">
      <div className="address-info">{addressInfo}</div>
      <div className="classification">{classification}</div>
      <div className="entry-info">{entryInfo}</div>
    </div>
    <AnimatedTitle />
  </div>
)

export default FooterSchedule
