import React, { Component } from 'react'
import Activity from '../Activity'

import './style.scss'
import PaginationBar from '../PaginationBar'

class ContentSchedule extends Component {
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
  componentDidUpdate(prevProps) {
    if (this.props.content !== prevProps.content) {
      console.log('here')
      this.setState({
        currentPage: 0,
      })
    }
  }
  render() {
    const { content } = this.props
    const { currentPage } = this.state
    return (
      <div className="ContentSchedule">
        <div className="sub-location">// {content.subLocation}</div>
        <div className="activities">
          <div className="column">
            {content.activities[currentPage * 2] &&
              content.activities[currentPage * 2].map((activity, index) => {
                return <Activity key={index} {...activity} />
              })}
          </div>
          <div className="column">
            {content.activities.length > currentPage * 2 + 1
              ? content.activities[currentPage * 2 + 1].map(
                  (activity, index) => {
                    return <Activity key={index} {...activity} />
                  }
                )
              : null}
          </div>
          <PaginationBar
            activities={content.activities}
            changePage={index => this.changePage(index)}
            currentPage={currentPage}
            style={{ position: 'relative' }}
            isDesktop={true}
          />
        </div>
      </div>
    )
  }
}
export default ContentSchedule
