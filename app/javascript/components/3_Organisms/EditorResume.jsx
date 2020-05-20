import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs'

const Header = require('@editorjs/header')
const List = require('@editorjs/list')

export default class EditorResume extends React.Component {
  constructor(props) {
    super(props)

    let dataContainer = document.getElementById('dataContainer')
    let dataFromBackend = JSON.parse(dataContainer.dataset.contents).content_data
    let url = 'http://localhost:3000/' + dataContainer.dataset.url_for_content + '.json'

    const editor = new EditorJS({
      holder: 'editorJSResume',
      data: dataFromBackend,
      onChange: () => {console.log('Now I know that Editor\'s content changed!')},
      placeholder: 'Новое резюме',
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
        }
      }
    })
  }

  render() {
    return <div className='editorjs editorjs-in-preview' id='editorJSResume' />
  }
}
