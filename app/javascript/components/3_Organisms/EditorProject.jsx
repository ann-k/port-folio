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

export default class EditorProject extends React.Component {
  constructor(props) {
    super(props)

    let dataContainer = document.getElementById('dataContainer')
    let dataFromBackend = JSON.parse(dataContainer.dataset.contents).content_data
    let url = 'http://localhost:3000/' + dataContainer.dataset.url_for_content + '.json'

    const editor = new EditorJS({
      holder: 'editorJSProject',
      data: dataFromBackend,
      placeholder: 'Новый проект',
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
        /* inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        }, */
        // table: { class: Table, },
        image: {
          class: ImageTool,
          config: {
            captionPlaceholder: 'Подпись',
            endpoints: {
              byFile: 'http://localhost:3000/upload_content_image', // Your backend file uploader endpoint
            }
          }
        }
      }
    })
  }

  render() {
    return <div className='editorjs editorjs-in-preview' id='editorJSProject' />
  }
}
