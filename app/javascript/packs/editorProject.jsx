import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'

const Header = require('@editorjs/header')
const List = require('@editorjs/list')

export const editorProject = document.addEventListener('DOMContentLoaded', () => {
  // let projectName = document.getElementById('editorjstest').dataset.project

  let dataFromBackend = JSON.parse(document.getElementById('editorDataContainer').dataset.contents).content_data
  console.log(dataFromBackend);

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
      }
    }
  })

  let saveButton = document.getElementById('editorJsSaveButton')

  saveButton.addEventListener('click', () => {
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)

      let newContent = {
        content_data: outputData,
        contentable_id: 1,
        contentable_type: 'Project'
      }

      fetch('http://localhost:3000/contents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContent)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error)
      })

      // let outputDataTextTest = outputData.blocks[0]
      // console.log(outputDataTextTest.data.text);
      // ReactDOM.render(
      //   outputDataTextTest.data.text,
      //   document.getElementById('editorjstest')
      // )


    }).catch((error) => {
      console.log('Saving failed: ', error)
    })

  })
})
