import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'

const Header = require('@editorjs/header')
const List = require('@editorjs/list')

export const editorPortfolio = document.addEventListener('DOMContentLoaded', () => {
  const editor = new EditorJS({
    holder: 'editorPortfolio',
    data: {},
    onChange: () => {console.log('Now I know that Editor\'s content changed!')},
    placeholder: 'Новое портфолио',

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
      let outputDataTextTest = outputData.blocks[0]
      console.log(outputDataTextTest.data.text);

      ReactDOM.render(
        outputDataTextTest.data.text,
        document.getElementById('editorjstest')
      )
    }).catch((error) => {
      console.log('Saving failed: ', error)
    })

  })
})
