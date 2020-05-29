import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconPortfolio from 'images/icons/nav/portfolio.svg'
import IconAdd from 'images/icons/add.svg'

import ListItem from '../2_Molecules/ListItem'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.props.onPanelAddObjectsDisplayChange(event)
  }

  render() {
    return (
      <div className="tab-list-area" id="tabsListArea">
          <div className="tabs-list">
            <div className="tabs-list-header">
              <div className="tabs-list-name">
                <h3>Портфолио</h3>
              </div>
              <button className="button button-small button-icon-and-words" onClick={this.handleChange}>
                <img src={IconAdd} />
                <h3>Добавить портфолио</h3>
              </button>
            </div>

            <div className="tabs-list-items-container">
              {this.props.portfolios.map((portfolio, index) => <ListItem key={portfolio.id} portfolio={portfolio} index={index} removePortfolio={this.props.removePortfolio}/>)}
            </div>
          </div>
      </div>
    )
  }
}
