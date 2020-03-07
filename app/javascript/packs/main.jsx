import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Menu />,
    document.getElementById('navbar')
  );
})

// const menuItemsWrapped = Menu.map(function(item) {
//   return <div>item</div>;
// })
