import React, { Component } from 'react'
import smoothScroll from '../../utils/smoothScroll.js'
import './style.scss'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberSection: 0,
    }
  }

  onClick = numberSection => {
    const ua = navigator.userAgent.toLowerCase()
    const isAndroid = ua.indexOf('android') > -1
    let endY = numberSection * window.innerHeight
    if (isAndroid) {
      endY = endY + 130
    }
    smoothScroll(0, endY, 1600)
  }

  isOnViewport = () => {
    const numberSection = Math.round(window.scrollY / window.innerHeight)
    this.setState({
      numberSection,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.isOnViewport())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.isOnViewport())
  }

  render() {
    const { numberSection } = this.state
    const { openAbout } = this.props
    return (
      <ul className="Menu">
        <li onClick={() => openAbout()}>Sobre</li>
        <li
          className={numberSection === 1 ? 'onViewPort' : ''}
          onClick={() => this.onClick(1)}
        >
          Locais
        </li>
        <li
          className={numberSection === 2 ? 'onViewPort' : ''}
          onClick={() => this.onClick(2)}
        >
          Programação
        </li>
        <li
          className={numberSection === 3 ? 'onViewPort' : ''}
          onClick={() => this.onClick(3)}
        >
          Contato
        </li>
      </ul>
    )
  }
}
export default Menu
