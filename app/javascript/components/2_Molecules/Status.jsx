import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ConstructorContainer extends React.Component {
  render() {
    return (
      <div className='status'>
        {this.props.portfolio && <p className='disabled'>{this.props.portfolio.name}</p>}
        {this.props.project && <p className='disabled'>{this.props.project.name}</p>}
        {this.props.resume && <p className='disabled'>{this.props.resume.name}</p>}

        <p className='disabled'>Изменения сохраняются автоматически</p>
      </div>
    )
  }
}
