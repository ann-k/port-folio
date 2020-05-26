import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ObjectToAdd from '../2_Molecules/ObjectToAdd'
import IconRemove from 'images/icons/remove.svg'

export default class PanelAddObjects extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onPanelAddObjectsDisplayChange(event)
  }

  render() {
    let objectsToAdd = this.props.portfoliosToAdd || this.props.projectsToAdd

    if (objectsToAdd) {
      return (
        <div className={this.props.disabled ? 'panel disabled' : 'panel'} id='panelAddObjects'>
          <div>
            <h3>{this.props.projectsToAdd ? 'Добавить проекты' : 'Добавить в портфолио'}</h3>
            {/* <a>Добавить все</a> */}
          </div>

          <div>
            {objectsToAdd.map((object, index) => <ObjectToAdd key={object.id} object={object} index={index} addProject={this.props.addProject} addPortfolio={this.props.addPortfolio} />)}
          </div>

          <div id='iconRemove' className='button button-icon' onClick={this.handleChange}>
            <img src={IconRemove} />
          </div>

          {objectsToAdd.length === 0 && this.props.portfoliosToAdd ? <p>Этот проект добавлен во все существующие портфолио!</p> : ''}
          {objectsToAdd.length === 0 && this.props.projectsToAdd ? <p>Вы добавили все существующие проекты!</p> : ''}
        </div>
      )
    }

    return null
  }
}
