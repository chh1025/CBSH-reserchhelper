import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import { Navbar, Nav, Container} from 'react-bootstrap';

import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';

function MyNav() {

  const [UserLoginData, setUserLoginData] = useState({
    email: '',
    password: ''
  })

  const NavSty = {
    color:'black'
  }

  return (
    <div className="MyNav">
      {/* <Navbar bg="white" variant="light">
          <Container>
            <Navbar.Brand href="#home">CBSH</Navbar.Brand>
            <Nav className="m-auto">
              <Nav.Link href="#소개" style={NavSty}>소개</Nav.Link>
              <Nav.Link href="#공지사항" style={NavSty}>공지사항</Nav.Link>
              <Nav.Link href="#자유게시판" style={NavSty}>자유게시판</Nav.Link>
              <Nav.Link href="#토론게시판" style={NavSty}>토론게시판</Nav.Link>
              <Nav.Link href="#팀원찾기" style={NavSty}>팀원찾기</Nav.Link>
              <Nav.Link href="#지도교사찾기" style={NavSty}>지도교사찾기</Nav.Link>
            </Nav>
          </Container>
      </Navbar> */}
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <LinkContainer to="/home" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link style={NavSty}>대문</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/introduce" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link style={NavSty}>소개</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/notice" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link style={NavSty}>공지사항</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/free" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link href="/free" style={NavSty}>자유게시판</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/argue" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link style={NavSty}>토론게시판</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/team" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link style={NavSty}>팀원찾기</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/teacher" style={{textDecoration:'none', color:'black'}}>
            <Nav.Link style={NavSty}>지도교사찾기</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default MyNav;