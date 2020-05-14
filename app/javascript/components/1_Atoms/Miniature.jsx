import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import DefaultPic from 'images/default.png'

export default class Miniature extends React.Component {
  render() {
    if (this.props.src) {
      return <div className='miniature'><img src={this.props.src} /></div>
    }
    return <div className='miniature'><img src={DefaultPic} /></div>
  }
}
