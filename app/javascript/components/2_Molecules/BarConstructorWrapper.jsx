import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class BarConstructorWrapper extends React.Component {
  render() {
    return (
      <ul className="bar bar-top bar-with-two-tabs">
        <li className="tablink constructor-tablink" id="defaultTab">
          <h3>Настройки</h3>
          <div />
        </li>

        <li className="tablink constructor-tablink">
          <h3>Оформление</h3>
          <div />
        </li>
      </ul>
    )
  }
}
