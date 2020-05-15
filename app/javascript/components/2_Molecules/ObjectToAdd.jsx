import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Miniature from '../1_Atoms/Miniature.jsx'

import IconAdd from 'images/icons/add.svg'

export default class ObjectToAdd extends React.Component {
  render() {
    let addObject = this.props.addPortfolio || this.props.addProject
    
    return (
      <div className='list-in-panel'>
        <div id='iconAdd' className='button button-icon'
             onClick={() => addObject(this.props.object.id)}>
          <img src={IconAdd}></img>
        </div>

        <Miniature src={this.props.object.cover.url}/>
        <p>{this.props.object.name}</p>
      </div>
    )
  }
}
