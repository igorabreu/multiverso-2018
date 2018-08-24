import React, { Component } from 'react'
import Activity from '../Activity'
import Hammer from 'react-hammerjs'

import './style.scss'
import PaginationBar from '../PaginationBar'

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
      <Hammer
        onSwipeLeft={() => this.props.onSwipeLeft()}
        onSwipeRight={() => this.props.onSwipeRight()}
      >
        <div className="SliderPage" style={{ background: 'black' }}>
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
              <PaginationBar
                activities={activities}
                changePage={index => this.changePage(index)}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </Hammer>
    )
  }
}
export default SliderPage
