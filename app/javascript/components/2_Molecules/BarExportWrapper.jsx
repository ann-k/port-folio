import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconExport from 'images/icons/export.svg'

export default class BarExportWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onPanelExportDisplayChange(event)
  }

  render() {
    return (
      <div className='bar bar-bottom' id='exportBar' onClick={this.handleChange}>
        <img src={IconExport} />
        <h3>Экспортировать</h3>
      </div>
    )
  }
}
