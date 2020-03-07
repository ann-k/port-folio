import React from 'react'
import ReactDOM from 'react-dom'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {name: "Портфолио (реакт)", id: 0},
        {name: "Проекты (реакт)", id: 1},
        {name: "Резюме (реакт)", id: 2}
      ]
    }
  }

  render() {
    const smth = this.state.menuItems.map((menuItem) => {
      return (<div key={menuItem.id}>{menuItem.name}</div>)
    })

    return (
      smth
    )
  }
}
