import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconDesktop from 'images/icons/preview/desktop.svg'
import IconMobile from 'images/icons/preview/mobile.svg'
import IconFullscreen from 'images/icons/preview/fullscreen.svg'

export default class BarPreviewWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onTabChange(event)
  }

  render() {
    return (
      <div id='bar-preview-wrapper'>
        <ul className='bar bar-bottom bar-with-three-tabs' id='bar-preview'>
          <li className={this.props.tabActive === 'desktop' ? 'tablink preview-tablink active' : 'tablink preview-tablink'} onClick={this.handleChange} id='desktop'>
            <div />
            <img src={IconDesktop} />
          </li>
          <li className={this.props.tabActive === 'mobile' ? 'tablink preview-tablink active' : 'tablink preview-tablink'} onClick={this.handleChange} id='mobile'>
            <div />
            <img src={IconMobile} />
          </li>
          <li className={this.props.tabActive === 'fullscreen' ? 'tablink preview-tablink active' : 'tablink preview-tablink'} onClick={this.handleChange} id='fullscreen'>
            <div />
            <img src={IconFullscreen} />
          </li>
        </ul>
      </div>
    )
  }
}
