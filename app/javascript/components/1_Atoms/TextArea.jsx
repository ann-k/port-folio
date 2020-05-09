import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class TextArea extends React.Component {
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
        <textarea id={this.props.id}
                  placeholder={this.props.placeholder}
                  value={this.props.value}
                  name={this.props.name}
                  onChange={this.handleChange} />
      </div>
    )
  }
}
