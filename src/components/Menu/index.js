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
    const endY = numberSection * window.innerHeight
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
    return (
      <ul className="Menu">
        <li
          className={numberSection === 1 ? 'onViewPort' : ''}
          onClick={() => this.onClick(1)}
        >
          Conheça
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
