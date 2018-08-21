import React from 'react'

import AnimatedTitle from '../../components/AnimatedTitle'
import Dates from '../../components/Dates'
import BackgroundAnimation from '../../components/BackgroundAnimation'
import './style.scss'

const Hero = ({ data }) => (
  <div className="Hero">
    <Dates />
    <AnimatedTitle siteTitle={data.site.siteMetadata.title} big={true} />
    <BackgroundAnimation />
  </div>
)

export default Hero
