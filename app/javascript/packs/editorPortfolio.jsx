import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'

const Header = require('@editorjs/header')

document.addEventListener('DOMContentLoaded', () => {
  let dataFromBackend = JSON.parse(document.getElementById('editorPortfolio').dataset.contents).content_data
  let url = 'http://localhost:3000/' + document.getElementById('editorPortfolio').dataset.url + '.json'
  console.log(dataFromBackend);

  const editor = new EditorJS({
    holder: 'editorPortfolio',
    data: dataFromBackend,
    onChange: () => {console.log('Now I know that Editor\'s content changed!')},
    placeholder: 'Новое портфолио',
    onChange: () => {
      editor.save().then((outputData) => {
        console.log(outputData);

        fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({content: outputData})
        })
        .then(res => {
          return res.json()
        })
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error)
        })
      }).catch((error) => {
        console.log('Saving failed: ', error)
      })
    },

    tools: {
      header: {
        class: Header,
        inlineToolbar: true,
        config: {
          placeholder: 'Enter a header',
          levels: [1, 2, 3],
          defaultLevel: 2
        }
      }
    }
  })
})
