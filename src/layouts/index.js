import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Hero from '../sections/Hero'
import Locations from '../sections/Locations'
import Schedule from '../sections/Schedule'

import '../styles/base.scss'
import './style.scss'

const Layout = ({ children, data }) => (
  <div className="Layout">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Hero data={data} />
    <Locations />
    <Schedule />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
