import React from 'react'
import './style.scss'

function renderClassName(title) {
  switch (title) {
    case 'Saracura':
      return 'titleLeft'
    case 'Lab Oi Futuro':
      return 'titleUpperLeft'
    case 'Viaduto de Laranjeiras':
      return 'titleDownLeft'
    case 'Central do Brasil':
      return 'titleBigger'
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
