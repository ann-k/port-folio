import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Pdf from 'react-to-pdf'

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
    let urlForExport = document.getElementById('dataContainer').dataset.url_for_content
    let urlForRoot = document.getElementById('dataContainer').dataset.url_for_root

    return (
      <div className={this.props.disabled ? 'panel disabled' : 'panel'} id='exportPanel'>
        <div id='iconRemove' className='button button-icon' onClick={this.handleChange}>
          <img src={IconRemove} />
        </div>

        <p>
          {this.props.portfolio && 'Ваше портфолио доступно '}
          {this.props.project && 'Ваш проект доступен '}
          {this.props.resume && 'Ваше резюме доступно '}
          по ссылке<br/>
        <a href={urlForExport}>
            www.p-f.tools{urlForExport}
          </a>
        </p>

        <CopyToClipboard text={`${urlForRoot}${urlForExport}`}
                         onCopy={() => {
                           event.preventDefault()
                           this.setState({copied: true})
                           setTimeout(() => this.setState({copied: false}), 1000)
                         }}>
          <button className='button button-big button-icon-and-words'>
            <img src={IconCopy} />
            <h3>{this.state.copied ? 'Скопировано!' : 'Скопировать ссылку'}</h3>
          </button>
        </CopyToClipboard>

        {this.props.resume &&
          <Pdf targetRef={this.props.exportPDFRef} filename='cv.pdf'>
            {({ toPdf }) => {
              return (
                <button className='button button-big button-icon-and-words'
                        onClick={(event) => {
                            event.preventDefault()
                            toPdf()
                }}>
                  <img src={IconDownload} />
                  <h3>Сохранить в PDF</h3>
                </button>
              )
            }}
          </Pdf>
        }
      </div>
    )
  }
}
