import React, { Component } from 'react'
import Activity from '../Activity'

import './style.scss'

class SliderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    }
  }

  changePage = index => {
    this.setState({
      currentPage: index,
    })
  }

  render() {
    const {
      locationName,
      activityCategory,
      subLocation,
      weekDays,
      activities,
    } = this.props
    const { currentPage } = this.state
    return (
      <div className="SliderPage" style={{ background: 'black' }}>
        <div className="location-button">{locationName}</div>
        <div className="header">
          <div className="location-name">
            <h3 className="title-location">{locationName}</h3>
          </div>
          <h4 className="activities-category">{activityCategory}</h4>
          <div className="dates">{weekDays}</div>
        </div>
        <div className="content-schedule">
          <h4 className="sub-location">// {subLocation}</h4>
          <div className="activities">
            {activities[currentPage].map((activity, index) => {
              return <Activity key={index} {...activity} />
            })}
            <ul className="pagination-bar">
              {activities.map((activity, index) => {
                return (
                  <li
                    className={currentPage === index ? 'selected' : null}
                    onClick={() => this.changePage(index)}
                    key={index}
                  >
                    {index + 1}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default SliderPage
