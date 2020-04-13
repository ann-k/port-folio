import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image'

const Header = require('@editorjs/header')
const List = require('@editorjs/list')
const Embed = require('@editorjs/embed')

document.addEventListener('DOMContentLoaded', () => {
  // let projectName = document.getElementById('editorjstest').dataset.project
  // let saveButton = document.getElementById('editorJsSaveButton')

  let dataFromBackend = JSON.parse(document.getElementById('editorProject').dataset.contents).content_data
  let url = document.getElementById('editorProject').dataset.url + '.json'

  const editor = new EditorJS({
    holder: 'editorProject',
    data: dataFromBackend,
    placeholder: "Плейсхолдер",
    onChange: () => {
      editor.save().then((outputData) => {
        console.log(outputData);

        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
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
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      embed: {
        class: Embed,
        inlineToolbar: true
      },
      image: {
        class: ImageTool,
        config: {
          captionPlaceholder: 'Подпись',
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            // byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          }
        }
      }
    }
  })
})
