import React, { Component } from 'react'

import './style.scss'

class PaginationBar extends Component {
  render() {
    const { activities, changePage, currentPage, isDesktop } = this.props
    if (isDesktop) {
      return (
        <ul className="PaginationBar">
          {activities.length <= 2
            ? ''
            : activities.map((activity, index) => {
                if (index >= Math.round(activities.length / 2)) {
                  return
                }
                return (
                  <li
                    className={currentPage === index ? 'selected' : null}
                    onClick={() => changePage(index)}
                    key={index}
                  >
                    {index + 1}
                  </li>
                )
              })}
        </ul>
      )
    } else {
      return (
        <ul className="PaginationBar">
          {activities.length === 1
            ? ''
            : activities.map((activity, index) => {
                return (
                  <li
                    className={currentPage === index ? 'selected' : null}
                    onClick={() => changePage(index)}
                    key={index}
                  >
                    {index + 1}
                  </li>
                )
              })}
        </ul>
      )
    }
  }
}
export default PaginationBar
