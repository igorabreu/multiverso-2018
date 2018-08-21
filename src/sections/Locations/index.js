import React from 'react'

import Map from '../../components/Map'
import './style.scss'

const Locations = ({ data }) => (
  <div className="Locations">
    <Map data={data} />
  </div>
)

export default Locations
