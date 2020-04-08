import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'

const Header = require('@editorjs/header')
const List = require('@editorjs/list')
const Embed = require('@editorjs/embed');

export const editorProject = document.addEventListener('DOMContentLoaded', () => {
  // let projectName = document.getElementById('editorjstest').dataset.project

  let dataFromBackend = JSON.parse(document.getElementById('editorDataContainer').dataset.contents).content_data

  const editor = new EditorJS({
    holder: 'editorProject',
    data: dataFromBackend,
    onChange: () => {console.log('Now I know that Editor\'s content changed!')},
    placeholder: "Плейсхолдер",

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
      },
      embed: {
        class: Embed,
        inlineToolbar: true
      }
    }
  })

  let saveButton = document.getElementById('editorJsSaveButton')

  let url = document.getElementById('editorDataContainer').dataset.url + '.json'

  saveButton.addEventListener('click', () => {
    editor.save().then((outputData) => {
      // console.log('Article data: ', outputData)

      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: outputData})
      })
      .then(res => {
        // return res.json()
        console.log(res);
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error)
      })

      // fetch('http://localhost:3000/contents', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(outputData)
      // })
      // .then(res => res.json())
      // .then(data => console.log(data))
      // .catch((error) => {
      //   console.error('Error:', error)
      // })

    }).catch((error) => {
      console.log('Saving failed: ', error)
    })

  })
})
