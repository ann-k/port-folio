import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onInputChange(event)
  }

  render() {
    return (
      <div className="input">
        <h3>{this.props.label}</h3>
        <input id={this.props.id}
               placeholder={this.props.placeholder}
               type={this.props.type}
               value={this.props.value}
               name={this.props.name}
               onChange={this.handleChange} />
      </div>
    )
  }
}
