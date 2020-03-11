import React from 'react'
import ReactDOM from 'react-dom'

const menuItems = [
  "Портфолио (реакт)",
  "Проекты (реакт)",
  "Резюме (реакт)"
]

export default class Menu extends React.Component {
  render() {
    return (
      menuItems.map((menuItem, id) => {
        return (<div key={id}>{menuItem}</div>)
      })
    )
  }
}
