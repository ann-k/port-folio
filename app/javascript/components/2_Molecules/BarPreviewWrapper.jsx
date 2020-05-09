import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconDesktop from 'images/icons/preview/desktop.svg'
import IconMobile from 'images/icons/preview/mobile.svg'
import IconFullscreen from 'images/icons/preview/fullscreen.svg'

export default class BarPreviewWrapper extends React.Component {
  render() {
    return (
      <div id='bar-preview-wrapper'>
        <ul className='bar bar-bottom bar-with-three-tabs' id='bar-preview'>
          <li className='tablink preview-tablink active'>
            <div />
            <img src={IconDesktop} />
          </li>
          <li className='tablink preview-tablink'>
            <div />
            <img src={IconMobile} />
          </li>
          <li className='tablink preview-tablink'>
            <div />
            <img src={IconFullscreen} />
          </li>
        </ul>
      </div>
    )
  }
}
