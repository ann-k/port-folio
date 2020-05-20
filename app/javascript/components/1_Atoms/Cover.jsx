import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import DefaultPic from 'images/default.png'

export default class Cover extends React.Component {
  render() {
    if (this.props.src) {
      return <div className={this.props.size}><img src={this.props.src} /></div>
    }
    return <div className={this.props.size}><img src={DefaultPic} /></div>
  }
}
