import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import AnimatedLogo from '../components/AnimatedLogo'
import BackgroundAnimation from '../components/BackgroundAnimation'
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
    <AnimatedLogo siteTitle={data.site.siteMetadata.title} />
    <BackgroundAnimation />
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
