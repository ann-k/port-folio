import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import ProjectInEditor from '../2_Molecules/ProjectInEditor'
import EditorPortfolio from '../3_Organisms/EditorPortfolio'
import EditorProject from '../3_Organisms/EditorProject'
import EditorResume from '../3_Organisms/EditorResume'

export default class ContentsContainer extends React.Component {
  render() {
    return (
      <div className='contents-and-browser-container-in-preview'>
        <div className='browser-bar-container'>
          <div className='browser-bar' id={this.props.tabActive}>
            <div />
            <div />
            <div />
        </div>
      </div>

        <div className='content-in-preview-container'>
          <div className='content-in-preview' id={this.props.tabActive}>
            {this.props.project && <EditorProject />}
            {this.props.resume && <EditorResume />}
            {this.props.portfolio && <EditorPortfolio />}
            {this.props.portfolio &&
              <CSSTransitionGroup
                component='div'
                className='projects-container projects-container-in-preview'
                transitionName='example'
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                  {this.props.projects.map((project) => <ProjectInEditor key={project.name} project={project} />)}
              </CSSTransitionGroup>
            }
          </div>
        </div>
      </div>
    )
  }
}
