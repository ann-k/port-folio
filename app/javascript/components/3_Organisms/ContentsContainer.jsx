import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ContentsContainer extends React.Component {
  render() {
    return (
      <div className='contents-container'>
        <div className='browswer-bar'>
          <div />
          <div />
          <div />
        </div>
        <div className='contents'>
          <div className='editorjs' />
          <div className='projects-container' />
        </div>
      </div>
    )
  }
}
