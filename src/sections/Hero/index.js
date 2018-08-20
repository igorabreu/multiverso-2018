import React from 'react'

import AnimatedLogo from '../../components/AnimatedLogo'
import Dates from '../../components/Dates'
import BackgroundAnimation from '../../components/BackgroundAnimation'
import './style.scss'

const Hero = ({ data }) => (
  <div className="Hero">
    <Dates />
    <AnimatedLogo siteTitle={data.site.siteMetadata.title} />
    <BackgroundAnimation />
  </div>
)

export default Hero
