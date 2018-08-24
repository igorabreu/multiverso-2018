import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu from '../components/Menu'

import Hero from '../sections/Hero'
import Locations from '../sections/Locations'
import Schedule from '../sections/Schedule'
import Footer from '../sections/Footer'
import About from '../sections/About'

import '../styles/base.scss'
import './style.scss'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutOpen: false,
    }
  }
  handleAbout = bool => {
    console.log(bool)
    this.setState({
      aboutOpen: bool,
    })
  }
  render() {
    const { data } = this.props
    const { aboutOpen } = this.state
    console.log('here', aboutOpen)
    return (
      <div className="Layout">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Festival Multiverso' },
            {
              name: 'keywords',
              content:
                'creative coding, arte generativa, festival, Rio de Janeiro',
            },
          ]}
        />
        <Menu openAbout={() => this.handleAbout(true)} />
        {aboutOpen ? (
          <About closeAbout={() => this.handleAbout(false)} />
        ) : null}
        <Hero data={data} />
        <Locations />
        <Schedule />
        <Footer />
      </div>
    )
  }
}
export default Layout

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
