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

  constructor(props) {
    super(props)
    this.state = {
      API_KEY: undefined,
    }
  }

  componentDidMount() {
    setState({ API_KEY: process.env.API_KEY_GOOGLE_MAPS })
  }

  render() {
    const { zoom, center, styles } = this.props
    if (this.state.API_KEY) {
      return (
        <div className="Map">
          <div className="taglines">
            <h3>Creative Coding</h3>
            <h3>Arte Generativa</h3>
          </div>
          <AnimatedGraphism />
          <AnimatedTitle />
          <GoogleMapReact
            bootstrapURLKeys={{ key: this.state.API_KEY }}
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
          <h3 className="message-error"> Missing Google Maps API Key </h3>
        </div>
      )
    }
  }
}
export default Map
