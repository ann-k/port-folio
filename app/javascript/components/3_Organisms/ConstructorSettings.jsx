import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Input from '../1_Atoms/Input'
import TextArea from '../1_Atoms/TextArea'
import List from '../3_Organisms/List'

export default class ConstructorSettings extends React.Component {
  render() {
    return (
      <div className={this.props.disabled ? 'constructor disabled' : 'constructor'} id='settings'>
        <Input label='Название портфолио (видно только вам)'
               id='portfolio_name'
               placeholder='Новое портфолио'
               type='text'
               value={this.props.portfolio.name}
               name='name'
               onInputChange={this.props.handleInputChange} />

        <TextArea label='Описание (видно только вам)'
                  id='portfolio_description'
                  placeholder='Здесь будет описание'
                  value={this.props.portfolio.description}
                  name='description'
                  onInputChange={this.props.handleInputChange} />

        <List handlePanelAddProjectsDisplayChange={this.props.handlePanelAddProjectsDisplayChange} />
      </div>
    )
  }
}
