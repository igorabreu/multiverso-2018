import React, { Component } from 'react'
import './style.scss'
import AnimatedTitle from '../../components/AnimatedTitle'
import close from '../../assets/images/close.svg'

class About extends Component {
  render() {
    const { closeAbout } = this.props
    return (
      <div className="About">
        <div className="description">
          <span className="line-spaced">Multiverso</span>é um festival de{' '}
          <span className="emphase">arte generativa</span> e{' '}
          <span className="emphase">creative coding</span> que conta com
          oficinas para adultos e crianças, masterclasses, mini cursos, obras
          digitais, performances e intervenções urbanas no Oi Futuro e em outros
          pontos da cidade.
        </div>
        <img className="close-icon" src={close} onClick={() => closeAbout()} />
        <AnimatedTitle />
      </div>
    )
  }
}
export default About
