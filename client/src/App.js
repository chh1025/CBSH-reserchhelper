import React,{ Component } from 'react';
import { useEffect, useState} from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';
import { Markup } from 'interweave';

function App() {

  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent , setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3306/api/get').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])

  // console.log(viewContent)

  const submitReview = ()=>{
    // console.log(movieContent.content)
    Axios.post('http://localhost:3306/api/insert', {
      title: movieContent.title,
      content: movieContent.content,
      user : 'chh1025'
    }).then(()=>{
      alert('등록 완료!');
      Axios.get('http://localhost:3306/api/get').then((response)=>{
        console.log(response.data);
      })
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
  };

  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className='movie-container'>
        {viewContent.map((element) =>(
          <div key={element._id}>
            <div className="title" >
              <h2>{element.title}</h2>
              <h4>{element.user}</h4>
              <div className="cont">
                {ReactHtmlParser(element.content)}
                {/* <Markup content={element.content} /> */}
                {/* <div dangerouslySetInnerHTML={ {__html: element.content} }></div> */}
              </div>
            </div>
          </div>
          )
        )}
      </div>
      
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="Hello from CKEditor 5!"
          onReady={editor => {
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            // console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            // console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={submitReview}>입력</button>
    </div>
  );
}

export default App;