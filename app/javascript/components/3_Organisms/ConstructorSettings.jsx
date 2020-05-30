import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Input from '../1_Atoms/Input'
import TextArea from '../1_Atoms/TextArea'
import ChangeCover from '../3_Organisms/ChangeCover'
import DndList from '../3_Organisms/DndList'
import List from '../3_Organisms/List'

export default class ConstructorSettings extends React.Component {
  render() {
    if (this.props.portfolio) {
      return (
        <div className={this.props.tabActive === 'settings' ? 'constructor' : 'constructor disabled'} id='settings'>
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

          <DndList projects={this.props.projects}
                tabList={this.props.tabList}
                tabListOrder={this.props.tabListOrder}
                handleDragEnd={this.props.handleDragEnd}
                removeProject={this.props.removeProject}
                handlePanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />
        </div>
      )
    } else if (this.props.project) {
      return (
        <div className={this.props.disabled ? 'constructor disabled' : 'constructor'} id='settings'>
          <ChangeCover project={this.props.project}/>

          <Input label='Название проекта'
                 id='project_name'
                 placeholder='Новый проект'
                 type='text'
                 value={this.props.project.name}
                 name='name'
                 onInputChange={this.props.handleInputChange} />

          <List portfolios={this.props.portfolios}
                removePortfolio={this.props.removePortfolio}
                onPanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />
        </div>
      )
    } else if (this.props.resume) {
        return (
          <div className={this.props.disabled ? 'constructor disabled' : 'constructor'} id='settings'>
            <Input label='Название резюме (видно только вам)'
              id='resume_name'
              placeholder='Новое резюме'
              type='text'
              value={this.props.resume.name}
              name='name'
              onInputChange={this.props.handleInputChange} />

            <TextArea label='Описание (видно только вам)'
              id='resume_description'
              placeholder='Здесь будет описание'
              value={this.props.resume.description}
              name='description'
              onInputChange={this.props.handleInputChange} />
          </div>
        )
    }
  }
}
