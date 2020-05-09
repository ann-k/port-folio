import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ConstructorContainer extends React.Component {
  render() {
    return (
      <div className='status'>
        <p className='disabled'>РЕАКТ {this.props.portfolio.name}</p>
        <p className='disabled'>Изменения сохранены</p>
      </div>
    )
  }
}
