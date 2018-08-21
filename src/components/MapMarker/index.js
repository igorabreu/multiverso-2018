import React from 'react'
import './style.scss'

function renderClassName(title) {
  switch (title) {
    case 'Saracura':
      return 'titleLeft'
    case 'LabSônica':
      return 'titleUpperLeft'
    default:
      return
  }
}

const MapMarker = ({ title }) => (
  <div className="MapMarker">
    <div className="marker" />
    <div className={renderClassName(title)}>{title}</div>
  </div>
)

export default MapMarker
