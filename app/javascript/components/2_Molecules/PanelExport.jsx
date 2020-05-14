import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconRemove from 'images/icons/remove.svg'
import IconCopy from 'images/icons/copy.svg'
import IconDownload from 'images/icons/download.svg'

export default class PanelExport extends React.Component {
  constructor(props) {
    super(props)
    const content = JSON.parse(document.getElementById('dataContainer').dataset.contents)
    this.state = {content: content}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onPanelExportDisplayChange(event)
  }

  render() {
    return (
      <div className={this.props.disabled ? 'panel disabled' : 'panel'} id='exportPanel'>
        <div id='iconRemove' className='button button-icon' onClick={this.handleChange}>
          <img src={IconRemove} />
        </div>

        <p>
          Ваше портфолио доступно по ссылке<br/>
        <a href={`http://localhost:3000/${this.state.content.id}-${this.state.content.contentable_type.toLowerCase()}`}>
            www.p-f.to/{this.state.content.id}-{this.state.content.contentable_type.toLowerCase()}
          </a>
        </p>

        <button className='button button-big button-icon-and-words'>
          <img src={IconCopy} />
          <h3>Скопировать ссылку</h3>
        </button>
        <button className='button button-big button-icon-and-words'>
          <img src={IconDownload} />
          <h3>Сохранить в PDF</h3>
        </button>
      </div>
    )
  }
}
