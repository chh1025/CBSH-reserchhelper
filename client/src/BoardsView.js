import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'

import { Link, Route, Routes, BrowserRouter, useParamsm, useNavigate } from "react-router-dom";

function BoardsView(props) {

  // console.log(props)

  const [boardNum, setboardNum] = useState(0);

  const navigate = useNavigate();

  const bigTitleSty = {
    padding : '20px 0px 15px 0px'
  }

  const miniSty = {
    fontSize : '0.8em'
  }

  const titleSty = {
    fontSize : '1.0em',
    textAlign: 'left'
  }

  const conSty ={
    padding : '0',
    textAlign: 'center'
  }

  const boards = props.boardContent.filter( (data) => {
    return data.kind == props.kind
  })

  const boardBar = () => {
    const result = [];
    for (let i = 1; i < boardsNum/10 +1; i++) {
      result.push(
        <ListGroup.Item key={i} action href={`#${i}`} onClick={() => setboardNum(i-1)}>
          {i}
        </ListGroup.Item>
      );
    }
    return result.slice(boardNum-4,boardNum+4);
  }

  // console.log(boardNum)

  const boardsNum = boards.length

  React.useEffect(()=>{
    if (props.kind == '지도교사를찾습니다'){
      if(props.user != undefined && props.user != null && props.user != ''){
        if ((props.user.belong != 'teacher') && (props.user.belong != 'admin')){
          alert('교사만 이용할 수 있습니다')
          navigate('/home')
        }
      }
    }
  })

  const barSty = {
  }

  return (
    <div className="BoardPreview">

      <ListGroup variant="flush">
        <ListGroup.Item style = {bigTitleSty}>
          <h4>{props.kind}</h4>
        </ListGroup.Item>

        <ListGroup.Item>
          <Container style = {conSty}>
            <Row>
              <Col>글번호</Col>
              <Col></Col>
              <Col xs={5}>제목</Col>
              <Col xs={3}>날짜</Col>
              <Col>이름</Col>
              <Col>조회수</Col>
              <Col>좋아요</Col>
            </Row>
          </Container>
        </ListGroup.Item>

        <div style={{height:'55vh'}}>
          { boards.slice(0 + boardNum*10, 10 + boardNum*10).map( (data) =>(
            <Link to= {`/board/${data._id}`} style = {{textDecoration: 'none'}} key={data._id}>
              <ListGroup.Item>
                <Container style = {conSty}>
                  <Row>
                    <Col style = {miniSty}>{data._id}</Col>
                    <Col></Col>
                    <Col xs={5} style = {titleSty}>{data.title == data.title.slice(0,30)?data.title:data.title.slice(0,30)+'…'}</Col>
                    <Col xs={3} style = {miniSty}>{data.date.slice(0,16)}</Col>
                    <Col style = {miniSty}>{data.userName}</Col>
                    <Col style = {miniSty}>{data.hit}</Col>
                    <Col style = {miniSty}>{data.good}</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </Link>
          ))}
        </div>
        <br/>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1" >
          <ListGroup horizontal style={{ textAlign: 'center', margin : `auto auto`  }} >
            {boardBar()}
          </ListGroup>
        </Tab.Container>
      </ListGroup>
    </div>
  );
}

export default BoardsView;