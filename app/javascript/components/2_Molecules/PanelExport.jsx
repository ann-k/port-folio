import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconRemove from 'images/icons/constructor/remove.svg'
import IconCopy from 'images/icons/card/copy.svg'
import IconDownload from 'images/icons/card/download.svg'

export default class PanelExport extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onPanelExportDisplayChange(event)
  }

  render() {
    return (
      <div className={this.props.disabled ? 'panel disabled' : 'panel'} id='exportPanel'>
        <div id='iconRemove' onClick={this.handleChange}>
          <img src={IconRemove} />
        </div>

        <p>
          Ваше портфолио доступно по ссылке<br/>
          <a href='http://localhost:3000/<%#= @portfolio.content.id %>-<%#= @portfolio.content.contentable_type.downcase %>'>'www.p-f.to/portfolio.content.id-portfolio.content.contentable_type.downcase'</a>
        </p>

        <button className='button button-big'>
          <img src={IconCopy} />
          <h3>Скопировать ссылку</h3>
        </button>
        <button className='button button-big'>
          <img src={IconDownload} />
          <h3>Сохранить в PDF</h3>
        </button>
      </div>
    )
  }
}
