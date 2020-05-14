import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Miniature from '../1_Atoms/Miniature.jsx'

import IconAdd from 'images/icons/add.svg'

export default class ProjectToAdd extends React.Component {
  render() {
    return (
      <div className='list-in-panel'>
        <div id='iconAdd' className='button button-icon' onClick={() => this.props.addProject(this.props.project.id)}>
          <img src={IconAdd}></img>
        </div>

        <Miniature src={this.props.project.cover.url}/>
        <p>{this.props.project.name}</p>
      </div>
    )
  }
}
