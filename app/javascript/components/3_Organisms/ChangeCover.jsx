import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconRemove from 'images/icons/remove.svg'

export default class ChangeCover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {cover: this.props.project.cover.url}
    this.handleCoverChange = this.handleCoverChange.bind(this)
  }

  handleCoverChange = (event) => {
    if (event.target.files[0]) this.setState({cover: event.target.files[0].preview})

    let url = document.getElementById('dataContainer').dataset.url_for_project
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({cover: event.target.files[0]})
    })
    .then(res => {
      return res.json()
    })
  }

  render() {
    return (
      <div>
        <h3>Обложка</h3>
        <div id='addCoverToProject'>
          <div className='project-cover'>
            <div id='iconRemove' className='button button-icon'><img src={IconRemove} /></div>
            <img src={this.state.cover} className='project-cover-file' />
          </div>

          <div className='project-cover-buttons'>
            <button className='button button-medium button-words' onClick={() => event.preventDefault()}>
              <h3>Загрузить новую обложку</h3>
            </button>

            <input type="file" name="project[cover]" accept="image/png, image/jpeg" onChange={this.handleCoverChange} />

            {/*<button className='button button-medium button-words' id='chooseCover'>
              <h3>Или выбрать из изображений проекта</h3>
            </button>*/}
          </div>
        </div>
      </div>
    )
  }
}
