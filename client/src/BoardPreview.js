import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link  } from "react-router-dom";

function BoardPreview(props) {

  // console.log(props)

  const bigTitleSty = {
    padding : '5px 0px 0px 0px'
  }

  const miniSty = {
    fontSize : '5px'
  }

  const titleSty = {
    fontSize : '11px'
  }

  const conSty ={
    padding : '0'
  }

  const boards = props.boardContent.filter( (data) => {
    return data.kind == props.kind
  })

  const boardKorEng = {
    자유게시판 : 'free',
    공지사항 : 'notice',
    토론게시판 : 'argue',
    팀원을찾습니다 : 'team',
    지도교사를찾습니다 : 'teacher',
  }

  return (
    <div className="BoardPreview">
      <ListGroup variant="flush">
        <ListGroup.Item style = {bigTitleSty}>
          <Link to={`/${boardKorEng[props.kind]}`} style={{textDecoration:'none', color:'black'}}>
            <h5>{props.kind}</h5>
          </Link>
        </ListGroup.Item>
        { boards.slice(0,5).map( (data) => (
          <ListGroup.Item key={data._id}>
            <Link to={`/board/${data._id}`} style={{textDecoration:'none', color:'black'}}>
              <Container style = {conSty}>
                <Row>
                  <Col xs={5} style = {titleSty}>{data.title == data.title.slice(0,10)?data.title:data.title.slice(0,10)+'…'}</Col>
                  <Col xs={4} style = {miniSty}>{data.date.slice(0,16)}</Col>
                  <Col style = {miniSty}>{data.hit}</Col>
                  <Col style = {miniSty}>{data.good}</Col>
                </Row>
              </Container>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default BoardPreview;