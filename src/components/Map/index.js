import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import MapMarker from '../MapMarker'
import mapProps from './mapProps.js'
import locations from './locations'
import AnimatedGraphism from '../AnimatedGraphism'
import './style.scss'
import AnimatedTitle from '../AnimatedTitle'

class Map extends Component {
  static defaultProps = {
    ...mapProps,
  }
  render() {
    const { zoom, center, styles } = this.props
    if (process.env.API_KEY_GOOGLE_MAPS) {
      return (
        <div className="Map">
          <div className="taglines">
            <h3>Creative Coding</h3>
            <h3>Arte Generativa</h3>
          </div>
          <AnimatedGraphism />
          <AnimatedTitle />
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.API_KEY_GOOGLE_MAPS }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={{
              styles: [...styles],
              disableDefaultUI: true,
              minZoom: 12,
            }}
          >
            {locations.map((location, index) => {
              return (
                <MapMarker
                  key={index}
                  title={location.title}
                  lat={location.lat}
                  lng={location.lng}
                />
              )
            })}
          </GoogleMapReact>
        </div>
      )
    } else {
      return (
        <div className="Map">
          <h3 className="message-error"> Multiverso - Mapa de Atividades </h3>
        </div>
      )
    }
  }
}
export default Map
