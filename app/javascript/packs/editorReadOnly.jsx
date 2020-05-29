import React from 'react'
import ReactDOM from 'react-dom'
import parser from 'html-react-parser'
import EditorJS from '@editorjs/editorjs'

document.addEventListener('DOMContentLoaded', () => {
  let data = JSON.parse(document.getElementById('editorReadOnly').dataset.contents).content_data
console.log(data);
  function ReadOnly() {
    const renderBlock = (block) => {
      let type = block.type
      let data = block.data
      let content = ""

      switch (type) {
        case "header":
          const element =  React.createElement(
            `h${data.level}`,
            {
              className: 'ce-header',
            },
            data.text
          )
          content = (<div style={{height: "fit-content"}}>
              {element}
            </div>)
        break;
        case "list":
          content = (<ul className={`cdx-block cdx-list cdx-list--${data.style}`}>
            {data.items.map((item, i) =>  {
              if (i === data.items.length - 1) return <li className="cdx-list__item"><p>{item}</p></li>
                let re = /<br>/gi;
                let newstr = item.replace(re, '');
              return <li className="cdx-list__item"><p>{newstr}</p></li>
            })}
          </ul>)
        break;
        case "embed":
            content = (<div className="cdx-block embed-tool">
            <iframe className="embed-tool__content" style={{width: "fit-100%"}} height="320" frameborder="0" width="580"
              allowfullscreen src={data.embed}></iframe>
            <div style={{'text-align': "center", 'margin-top': "5px"}}>{data.caption}</div>
            </div> )
        break;
        case "code":
          content = (<div class="cdx-block ce-code">
              <pre className="ce-code__textarea cdx-input">
                <code >{data.code+""}</code>
              </pre>
            </div>)
        break;
        case "image":
            content = (
              <div className="cdx-block image-tool image-tool--filled">
                <div className="image-tool__image">
                  <img className="image-tool__image-picture" src={data.file.url}></img>
                  <div className="cdx-input image-tool__caption" contenteditable="false">
                    {data.caption}
                  </div>
                </div>
              </div>
            )
        break;
        default:
          content = (<div className="ce-paragraph cdx-block"> {parser(`${data.text}`)} </div>)
          break;
      }
      return (<div className="ce-block">
        <div className="ce-block__content">
          {content}
        </div>
      </div>)
    }

    return (data.blocks.map(block => renderBlock(block)))
  }

  ReactDOM.render(
    ReadOnly(data).map((item, id) => {
      return (<div key={id}>{item}</div>)
    }),
    document.getElementById('editorReadOnly')
  );
})
