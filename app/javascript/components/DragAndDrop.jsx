// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import { DragDropContext } from 'react-beautiful-dnd'
//
// import TabList from '../components/TabList'
// import Test from '../components/TabList'
// import initialData from '../components/initialData'
//
// export default class DragAndDrop extends React.Component {
//   render() {
//     return (
//         <DragDropContext onDragEnd={this.onDragEnd}>
//           {this.state.tabListOrder.map(tabListId => {
//           const tabList = this.state.tabList
//           // const projects = tabList.projectIds.map(projectId => this.state.projects[projectId])
//           const newProjects = tabList.projectIds.map(projectId => {
//             let filteredProjects = this.state.projects.filter(oldProject => oldProject.id === projectId)
//             return filteredProjects
//           })
//           const projects = [].concat(...newProjects)
//
//           return <TabList key={tabList.id} tabList={tabList} projects={projects} />
//           })}
//         </DragDropContext>
//     )
//   }
// }
