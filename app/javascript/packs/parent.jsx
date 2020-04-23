// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import { DragDropContext } from 'react-beautiful-dnd'
//
// import DragAndDrop from '../components/DragAndDrop'
//
// export default class App extends React.Component {
//   state = initialData
//
//   onDragEnd = result => {
//     const { destination, source, draggableId } = result
//
//     if (!destination) {
//       return
//     }
//
//     if (destination.droppableId === source.droppableId &&
//         destination.index === source.index) {
//       return
//     }
//
//     const tabList = this.state.tabList
//     const newProjectIds = Array.from(tabList.projectIds)
//     newProjectIds.splice(source.index, 1)
//     newProjectIds.splice(destination.index, 0, draggableId)
//
//     const newState = {
//       ...this.state,
//       tabList: {
//         ...this.state.tabList,
//         projectIds: newProjectIds,
//       }
//     }
//
//     this.setState(newState)
//
//     let url = document.getElementById('tabsListArea').dataset.url + '.json'
//
//     fetch(url, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({newOrder: newProjectIds})
//     })
//     .then(res => {
//       return res.json()
//     })
//     .then(data => console.log(data))
//     .catch((error) => {
//       console.error('Error:', error)
//     })
//   }
//
//   render() {
//     return (
//         <DragDrop everything={this.state}>
//         </DragDrop>
//     )
//   }
// }
//
//
//
// ReactDOM.render(<DragAndDrop />, document.getElementById('tabsListArea'));
