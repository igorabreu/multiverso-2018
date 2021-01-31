import React from 'react'

import Oi from '../../assets/images/oi.svg'
import SecCultura from '../../assets/images/sec_cultura.svg'
import Oifuturo from '../../assets/images/oifuturo.svg'
import Iluminura from '../../assets/images/iluminura.svg'
import Ocerco from '../../assets/images/ocerco.svg'
import PortoMaravilha from '../../assets/images/porto_maravilha.svg'
import Supervia from '../../assets/images/supervia.svg'
import Imperator from '../../assets/images/imperator.svg'
import ArenaDicro from '../../assets/images/arena_dicro.svg'
import Saracura from '../../assets/images/saracura.svg'
import Galpao from '../../assets/images/galpao.svg'
import Tau from '../../assets/images/tau.svg'
import Mirabilis from '../../assets/images/mirabilis.svg'
import Imersiva from '../../assets/images/imersiva.svg'

import './style.scss'

const Footer = ({ data }) => (
  <div className="Footer">
    <div className="info">
      Informações e inscrições para oficinas
      <span className="contact-email">festivalmultiverso@gmail.com</span>
    </div>
    <div className="group-desktop">
      <div className="sponsorship">
        <h5>Patrocínio</h5>
        <img src={Oi} />
        <img src={SecCultura} style={{ width: 160 }} />
      </div>
      <div className="production-group">
        <div className="production">
          <h5>Realização</h5>
          <img src={Oifuturo} />
          <img src={Iluminura} />
        </div>
        <div className="partner">
          <h5>Parceria</h5>
          <img src={Ocerco} />
          <img src={Tau} />
        </div>
      </div>
    </div>
    <div className="cultural">
      <h5>Apoio Cultural</h5>
      <img src={Supervia} />
      <img src={Imperator} />
      <img src={ArenaDicro} />
      <img src={Saracura} />
      <img src={Galpao} />
      <img src={Mirabilis} />
      <img src={Imersiva} />
      <img src={PortoMaravilha} />
    </div>
  </div>
)

export default Footer
