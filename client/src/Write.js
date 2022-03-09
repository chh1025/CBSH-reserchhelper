import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Axios from 'axios';

import Button from 'react-bootstrap/Button'

import { useNavigate } from 'react-router-dom';

function Write(props) {

  const boardKorEng = {
    자유게시판 : 'free',
    공지사항 : 'notice',
    토론게시판 : 'argue',
    팀원을찾습니다 : 'team',
    지도교사를찾습니다 : 'teacher',
  }

  const [EditorData, setEditorData] = useState({})
  
  const getValue = e => {
    const { name, value } = e.target;
    setEditorData({
      ...EditorData,
      [name]: value
    })
  };

  const navigate = useNavigate();

  const submit = ()=>{
    if (EditorData.title == '' || EditorData.title == undefined ){
      alert('제목을 입력해주세요')
    } else if(EditorData.content == '' || EditorData.content == undefined ) {
      alert('내용을 입력해주세요')
    } else {
      Axios.post(`http://${props.url}:3306/api/insert`, {
        title: EditorData.title,
        content: EditorData.content,
        anonymity: 0,
        kind: EditorData.choice == undefined ? '자유게시판':EditorData.choice,
        user : props.user,
      }).then(()=>{
        alert('등록 완료!');
        navigate(`/${boardKorEng[EditorData.choice == undefined ? '자유게시판':EditorData.choice]}`)
      })
    }
  };

  return (
    <div className="BoardPreview">
      <div className='form-wrapper'>
        <br/>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
          style = {{width:'59vw'}}
        />
        &nbsp;&nbsp;  
        <select name="choice" onChange={getValue} style={{textAlign:'center', width:'10.5vw'}}>
          <option value="자유게시판" selected>자유게시판</option>
          <option value="토론게시판">토론게시판</option>
          <option value="팀원을찾습니다">팀원을찾습니다</option>
          <option value="지도교사를찾습니다">지도교사를찾습니다</option>
        </select>
        <CKEditor
          editor={ClassicEditor}
          data="본문"
          onChange={(event, editor) => {
            const data = editor.getData();
            setEditorData({
              ...EditorData,
              content: data
            })
          }}

        />
      </div>
      <div style={{ textAlign: 'center', margin : `auto auto`}}>
        <Button variant="success" style={{margin:'5px auto', padding:'5px 20px'}} onClick={submit}>등록</Button>
      </div>
    </div>
  );
}

export default Write;