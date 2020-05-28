import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconRemove from 'images/icons/remove.svg'

export default class ChangeCover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.project.cover.url || null
    }
    this.handleCoverChange = this.handleCoverChange.bind(this)
    this.handleCoverDelete = this.handleCoverDelete.bind(this)
  }

  handleCoverChange = (event) => {
    let fileURL = window.URL.createObjectURL(event.target.files[0])
    this.setState({
      url: fileURL,
    })

    let url = document.getElementById('dataContainer').dataset.url_for_upload_cover
    let data = new FormData();
    data.append('cover', event.target.files[0])

    fetch(url, {
      method: 'POST',
      body: data
    })
    .then(res => {
      return res.json()
    })
  }

  handleCoverDelete = () => {
    this.setState({
      url: null,
    })

    let url = document.getElementById('dataContainer').dataset.url_for_upload_cover
    let data = new FormData();
    data.append('cover', null)

    fetch(url, {
      method: 'POST',
      body: data
    })
    .then(res => {
      return res.json()
    })
  }

  handleButtonUploaderClick = (event) => {
    event.preventDefault()
    document.getElementById('inputUploadCover').click()
  }


  render() {
    return (
      <div>
        <h3>Обложка</h3>
        <div id='addCoverToProject'>
          { this.state.url != null &&
            <div className='project-cover'>
              <div id='iconRemove' className='button button-icon' onClick={this.handleCoverDelete}>
                <img src={IconRemove} />
              </div>
              <img src={this.state.url} className='project-cover-file' />
            </div>
          }

          <div className='project-cover-buttons'>
            <button className='button button-medium button-words' onClick={this.handleButtonUploaderClick}>
              <h3>Загрузить новую обложку</h3>
            </button>

            <input hidden type='file' name='project[cover]' accept='image/png, image/jpeg' onChange={this.handleCoverChange} id='inputUploadCover'/>

            {/*<button className='button button-medium button-words' id='chooseCover'>
              <h3>Или выбрать из изображений проекта</h3>
            </button>*/}
          </div>
        </div>
      </div>
    )
  }
}
