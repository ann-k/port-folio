import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image'

const Header = require('@editorjs/header')
const List = require('@editorjs/list')
const Embed = require('@editorjs/embed')
const CodeTool = require('@editorjs/code')
const InlineCode = require('@editorjs/inline-code')
// const Table = require('@editorjs/table')

const editorProject = document.addEventListener('DOMContentLoaded', () => {
  let editorContainer = document.getElementById('editorProject')

  if (editorContainer) {
    let dataFromBackend = JSON.parse(document.getElementById('editorProject').dataset.contents).content_data
    let url = 'http://localhost:3000/' + document.getElementById('editorProject').dataset.url + '.json'

    const editor = new EditorJS({
      holder: 'editorProject',
      data: dataFromBackend,
      placeholder: 'Плейсхолдер',
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
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        embed: {
          class: Embed,
          inlineToolbar: true
        },
        code: CodeTool,
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        // table: { class: Table, },
        image: {
          class: ImageTool,
          config: {
            captionPlaceholder: 'Подпись',
            endpoints: {
              byFile: 'http://localhost:3000/upload_content_image', // Your backend file uploader endpoint
              // byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
          }
        }
      }
    })
  }
})

// document.addEventListener('DOMContentLoaded', () => {
//   let data = JSON.parse(document.getElementById('editorProject').dataset.contents).content_data
//
//   ReactDOM.render(
//     data.blocks
//     .filter(block => block.type === "image")
//     .map((block, id) => <img key={id} className="cover-image" src={block.data.file.url}
//     onClick={() => {
//       let id = document.getElementById('chooseCover').dataset.id
//       let url = document.getElementById('chooseCover').dataset.url
//
//       fetch(url, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           id: id,
//           cover: block.data.file.url
//         })
//       })
//       .then(res => {
//         return res.json()
//       })
//       .then(data => console.log(data))
//       .catch((error) => {
//         console.error('Error:', error)
//       })
//     }}></img>),
//     document.getElementById('chooseCover')
//   )
// })

export default editorProject
