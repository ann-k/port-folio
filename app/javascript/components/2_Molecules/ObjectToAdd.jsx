import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Cover from '../1_Atoms/Cover.jsx'

import IconAdd from 'images/icons/add.svg'

export default class ObjectToAdd extends React.Component {
  render() {
    let addObject = this.props.addProject || this.props.addToPortfolio

    return (
      <div className='list-in-panel'>
        <div id='iconAdd' className='button button-icon'
             onClick={() => addObject(this.props.object.id)}>
          <img src={IconAdd}></img>
        </div>

        <Cover src={this.props.object.cover.url} size={'miniature'}/>
        <p>{this.props.object.name}</p>
      </div>
    )
  }
}
