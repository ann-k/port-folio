import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class BarConstructorWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onTabChange(event)
  }

  render() {
    return (
      <ul className='bar bar-top bar-with-two-tabs'>
        <li className={this.props.settingsTabDisabled ? 'tablink constructor-tablink' : 'tablink constructor-tablink active'} onClick={this.handleChange}>
          <div />
          <h3>Настройки</h3>
        </li>

        <li className={this.props.decorationTabDisabled ? 'tablink constructor-tablink' : 'tablink constructor-tablink active'} onClick={this.handleChange}>
          <div />
          <h3>Оформление</h3>
        </li>
      </ul>
    )
  }
}
