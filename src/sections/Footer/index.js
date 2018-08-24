import React from 'react'

import Oi from '../../../public/images/oi.svg'
import SecCultura from '../../../public/images/sec_cultura.svg'
import Oifuturo from '../../../public/images/oifuturo.svg'
import Iluminura from '../../../public/images/iluminura.svg'
import Ocerco from '../../../public/images/ocerco.svg'
import PortoMaravilha from '../../../public/images/porto_maravilha.svg'
import Supervia from '../../../public/images/supervia.svg'
import Imperator from '../../../public/images/imperator.svg'
import ArenaDicro from '../../../public/images/arena_dicro.svg'
import Saracura from '../../../public/images/saracura.svg'
import Galpao from '../../../public/images/galpao.svg'
import Tau from '../../../public/images/tau.svg'
import Mirabilis from '../../../public/images/mirabilis.svg'
import Imersiva from '../../../public/images/imersiva.svg'

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
      <img src={PortoMaravilha} />
      <img src={Supervia} />
      <img src={Imperator} />
      <img src={ArenaDicro} />
      <img src={Saracura} />
      <img src={Galpao} />
      <img src={Mirabilis} />
      <img src={Imersiva} />
    </div>
  </div>
)

export default Footer
