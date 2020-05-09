import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconRemove from 'images/icons/constructor/remove.svg'

export default class PanelAddProjects extends React.Component {
  render() {
    return (
      <div className='panel' id='panelAddProjects'>
        <div id='iconRemove'>
          <img src={IconRemove} />
        </div>
      </div>
    )
  }
}
