import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconAdd from 'images/icons/button/add.svg'

export default class BarExportWrapper extends React.Component {
  render() {
    return (
      <div className="bar bar-bottom">
        <button id="exportButton" className="button">
          <img src={IconAdd} />
          <h3>Экспортировать</h3>
        </button>
      </div>
    )
  }
}
