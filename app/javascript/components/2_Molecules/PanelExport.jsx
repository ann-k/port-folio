import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import IconRemove from 'images/icons/remove.svg'
import IconCopy from 'images/icons/copy.svg'
import IconDownload from 'images/icons/download.svg'

export default class PanelExport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
    }
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
        <a href={`http://localhost:3000/${this.props.content.id}-${this.props.content.contentable_type.toLowerCase()}`}>
            www.p-f.to/{this.props.content.id}-{this.props.content.contentable_type.toLowerCase()}
          </a>
        </p>

        <CopyToClipboard text={`http://localhost:3000/${this.props.content.id}-${this.props.content.contentable_type.toLowerCase()}`}
                         onCopy={() => {
                           event.preventDefault()
                           this.setState({copied: true})
                         }}>
          <button className='button button-big button-icon-and-words'>
            <img src={IconCopy} />
            <h3>{this.state.copied ? 'Скопировано!' : 'Скопировать ссылку'}</h3>
          </button>
        </CopyToClipboard>

        <button className='button button-big button-icon-and-words'>
          <img src={IconDownload} />
          <h3>Сохранить в PDF</h3>
        </button>
      </div>
    )
  }
}
