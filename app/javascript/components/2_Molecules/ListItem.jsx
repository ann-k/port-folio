import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import IconRemove from 'images/icons/remove.svg'

export default class ListItem extends React.Component {
  render() {
    return (
          <div className='tabs-list-item'>
            <div>
              <p>{this.props.portfolio.name}</p>
            </div>

            <div id='iconRemove' className='button button-icon' onClick={() => this.props.removePortfolio(this.props.portfolio.id)}>
              <img src={IconRemove} />
            </div>
          </div>
    )
  }
}
