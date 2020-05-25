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
        <li className={this.props.tabActive === 'settings' ? 'tablink constructor-tablink active' : 'tablink constructor-tablink'} onClick={this.handleChange} id='settings'>
          <div />
          <h3>Настройки</h3>
        </li>

        <li className={this.props.tabActive === 'decoration' ? 'tablink constructor-tablink active' : 'tablink constructor-tablink'} onClick={this.handleChange} id='decoration'>
          <div />
          <h3>Оформление</h3>
        </li>
      </ul>
    )
  }
}
