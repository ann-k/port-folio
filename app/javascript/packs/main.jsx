import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import EditorJS from '@editorjs/editorjs'

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Menu />,
//     document.getElementById('navbar')
//   )
// })

const Header = require('@editorjs/header')
const List = require('@editorjs/list')

document.addEventListener('DOMContentLoaded', () => {
  const editor = new EditorJS({
    holder: 'editorjs',
    data: {},
    onChange: () => {console.log('Now I know that Editor\'s content changed!')},
    placeholder: 'Текст',

    tools: {
      header: {
        class: Header,
        inlineToolbar: true,
        config: {
          placeholder: 'Enter a header',
          levels: [1, 2, 3],
          defaultLevel: 2
        }
      },
      list: {
        class: List,
        inlineToolbar: true,
      }
    }
  })

  let saveButton = document.getElementById('editorJsSaveButton')

  saveButton.addEventListener('click', () => {
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
      // ReactDOM.render(
      //   outputData,
      //   document.getElementById('navbar')
      // )
    }).catch((error) => {
      console.log('Saving failed: ', error)
    })
  })
})
