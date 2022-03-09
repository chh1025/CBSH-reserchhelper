import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ListGroup from 'react-bootstrap/ListGroup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HTMLRenderer from 'react-html-renderer'

import { useParams, useNavigate } from 'react-router-dom';

function BoardViewer(props) {

  // console.log(props)
  const { board_id } = useParams();

  const [adCheck, setAdCheck] = useState(null);

  const navigate = useNavigate();

  const bigTitleSty = {
    padding : '20px 0px 15px 0px'
  }

  const miniSty = {
    fontSize : '0.8em'
  }

  const titleSty = {
    color:'black',
    textAlign: 'left',
    fontSize : '1.8em',
    margin:0
  }

  const conSty ={
    padding : '0',
    textAlign: 'center'
  }

  const boards = props.boardContent.filter( (data) => {
    return (data._id == board_id)
  })  


  const check = (kind) => {
    if(props.user != undefined && props.user != null && props.user != ''){
      if (props.user.belong == 'teacher' || props.user.belong == 'admin'){
        return true
      } else {
        return false || !(kind == '지도교사를찾습니다')
      }
    }
    return false || !(kind == '지도교사를찾습니다')
  }


  return (
    <div className="BoardViewer">
      {boards.map( (data) => check(data.kind)?(
        <div key={data._id}>
          <Container>
              <br/>
              <Row>
                <Col xs={5}><b style = {titleSty}>{data.title}</b></Col>
              </Row>
              <Row>
                <Col xs={3} style = {miniSty}>{data.userName}&nbsp;&nbsp;{data.date}&nbsp;&nbsp;{data.hit}&nbsp;&nbsp;{data.good}</Col>
              </Row>
              <br/>
          </Container>
          <CKEditor
            disabled={true}
            editor={ ClassicEditor }
            data={data.content}
            height = '5000px'
          />
        </div>
      ):console.log('') )}
    </div>
  );
}

export default BoardViewer;