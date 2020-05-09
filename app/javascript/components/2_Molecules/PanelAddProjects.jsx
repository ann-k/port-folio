import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconRemove from 'images/icons/constructor/remove.svg'

export default class PanelAddProjects extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onPanelAddProjectsDisplayChange(event)
  }

  render() {
    return (
      <div className={this.props.disabled ? 'panel disabled' : 'panel'} id='panelAddProjects'>
        <div id='iconRemove' onClick={this.handleChange}>
          <img src={IconRemove} />
        </div>
      </div>
    )
  }
}
