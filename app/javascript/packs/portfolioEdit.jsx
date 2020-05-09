import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PreviewContainer from '../components/3_Organisms/PreviewContainer'
import ConstructorContainer from '../components/3_Organisms/ConstructorContainer'

export default class PortfolioEdit extends React.Component {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    const portfolio = JSON.parse(document.getElementById('dataContainer').dataset.portfolio)

    this.state = {
      portfolio: portfolio
    }
  }

  handleNameChange(name) {
    this.setState({
      portfolio: {
        ...this.state.portfolio,
        name: name
      }
    })

    const url = document.getElementById('dataContainer').dataset.url_for_portfolio
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name
      })
    }).then(res => {
      return res.json()
    })
  }

  handleDescriptionChange(description) {
    this.setState({
      portfolio: {
        ...this.state.portfolio,
        description: description
      }
    })

    const url = document.getElementById('dataContainer').dataset.url_for_portfolio
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: description
      })
    }).then(res => {
      return res.json()
    })
  }

  render() {
    return (
      <>
        <PreviewContainer portfolio={this.state.portfolio} />
        <ConstructorContainer portfolio={this.state.portfolio}
                              handleNameChange={this.handleNameChange}
                              handleDescriptionChange={this.handleDescriptionChange} />
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PortfolioEdit />, document.getElementById('dataContainer'))
})
