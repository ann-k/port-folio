import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ProjectInEditor from '../2_Molecules/ProjectInEditor'
import EditorPortfolio from '../3_Organisms/EditorPortfolio'

export default class ContentsContainer extends React.Component {
  render() {
    return (
      <div className='contents-container'>
        <div className='browswer-bar'>
          <div />
          <div />
          <div />
        </div>
        <div className='contents'>
          <EditorPortfolio />

          <div className='projects-container'>
            {this.props.projects.map((project) => <ProjectInEditor key={project.position} project={project} />)}
          </div>
        </div>
      </div>
    )
  }
}
