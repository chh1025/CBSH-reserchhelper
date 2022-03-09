import React,{ Component } from 'react';
import { useEffect, useState} from 'react';
import Login from './Login';
import Nav from './Nav'
import auth from './auth'
import AuthRoute from './AuthRoute';
import Home from './Home';
import Profile from './Profile'
import BoardsView from './BoardsView'
import BoardViewer from './BoardViewer'
import Write from './Write'
import Signup from './Signup'
import nonPermission from './nonPermission'


import HTMLRenderer from 'react-html-renderer'

import styled from "styled-components"

import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function App2() {

    const url = "localhost"

    const [boardContent, setBoardContent] = useState()

    const [user, setUser] = useState(null);
    const authenticated = user != null;

    

    const login = async (email, password) => { 
        
        const res = await auth.signIn(email, password, url).then( (result) =>{
            if (result == false || result == undefined) {
                console.log(result)
                alert('비밀번호가 잘못되었습니다')
            } else{
                setUser(result)
            }
        })
        
    }
    const logout = () => setUser(null);

    const signup =  async (data) => {
        const res = await auth.signUp(data, url).then( (result) =>{
            if (result == false){
                alert('이미 존재하는 이메일 입니다')
            }else{
                alert('가입완료')
                login(String(result.email), String(result.nonCryPassword))    
            }        
        })
    }

    React.useEffect(()=>{
        // login('chhchh1025@naver.com','choi1025')
        // console.log(user)
        
        Axios.get(`http://${url}:3306/api/getBoard`).then((response)=>{
            setBoardContent(response.data);
        })
    },[boardContent])

    

    const ConSty = {
        margin : '4vh 4vw',
        padding:'1% 10%',
        border:'1%',
        backgroundColor : 'white',
        width : '95vw',
        height: '95vh',
        maxWidth: '100%',
        maxHeight: '100%',
        webkitBoxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)',
        boxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)',
        webkitBorderRadius: '10px 10px 10px 10px',
        borderRadius: '10px 10px 10px 10px'
    }

    const AppStl = {
        display: 'flex',
        justifyContent : 'center',
        alignItems: 'center',
        width : '100%',
        height : '100vh',
        minWeight:'1200px',
        minHeight:'500px',
    }

    const firstBarSty = {
        // marginLeft: "auto",
        // // justifyContent : 'flexEnd',
    }

    const profileOrLogin = () => (
        (user) ? (
            <Profile user={user}/>
        ) : (
            <Login/>
        )
    )
    
    if (user == null){
        return (<BrowserRouter><Routes> <Route path="*" element = {<Login login={login}/>}/> <Route path="signup" element = {<Signup signup={signup}/>}/> </Routes> </BrowserRouter>)
    } else if (user.permission == 0) {
        return (
        <div className="fadeInDown" style={AppStl}>
            <Container style={{}}>
                <Alert variant="success" style={{webkitBoxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)', boxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)', margin:'30vh 0'}}>
                    <Alert.Heading>회원가입을 축하드립니다</Alert.Heading>
                    <p>
                    회원가입이 성공적으로 이루어졌습니다. 관리자의 승인 이후 이용이 가능합니다.
                    </p>
                    <hr />
                    <p className="mb-0">
                        문의: chhchh1025@naver.com
                    </p>
                </Alert>
            </Container>
        </div>)
    } else {
    return (
        <div className="fadeInDown" style={AppStl}>
            <BrowserRouter>
                <Container style={ConSty}>
                    <Row style={{marginLeft:'auto',float: "right"}}>
                        <Col>
                            <div style={{float: "right"}}>
                                <Link to="/write" style={{textDecoration:'none', marginLeft:'auto'}}>
                                    {/* 🖊 */}
                                    {/* <img src='https://user-images.githubusercontent.com/54809044/154622826-1adb0839-a2c3-4ff1-9e54-126cc826a005.png' style={{height:'30px'}}></img> */}
                                    {/* <img src='https://user-images.githubusercontent.com/54809044/154623238-cff8bd66-1710-4c20-8bd6-44119b5f4d4a.png' style={{height:'30px'}}></img> */}
                                    {/* <img src='https://user-images.githubusercontent.com/54809044/154623243-3ec1fa21-b80d-491b-9ba9-96cd87aad1cc.png' style={{height:'40px'}}></img> */}
                                    <img style={{marginLeft:'auto'}} src='https://user-images.githubusercontent.com/54809044/154623815-f43cad49-9ab8-41dd-b8de-ed771c546d29.png' style={{height:'25px'}}></img>
                                </Link>
                                &nbsp;
                                <Link to="/profile" style={{textDecoration:'none', marginLeft:'auto'}}>
                                    {/* 👨‍🦲 */}
                                    <img stlye={{marginLeft:'auto'}} src='https://user-images.githubusercontent.com/54809044/154623009-2d5e8a49-40f1-4167-b675-b55cce71df8f.png' style={{height:'25px'}}></img>
                                    {/* <img src='https://user-images.githubusercontent.com/54809044/154623238-cff8bd66-1710-4c20-8bd6-44119b5f4d4a.png' style={{height:'30px'}}></img> */}
                                </Link>
                                &nbsp;
                                <Link to="/" onClick={logout}>
                                    <img stlye={{marginLeft:'auto'}} src='https://user-images.githubusercontent.com/54809044/154767671-9af1fe35-2222-43b4-9190-8dfb8397e143.png' style={{height:'25px'}}></img>
                                </Link>
                                &nbsp;
                            </div>
                        </Col>
                    </Row>
                    <Row><Col style={{fontSize:'5pt'}}><br/>&nbsp;</Col></Row>
                    <Row><Col><Nav/></Col></Row>
                    
                    <main>
                        <Routes>
                            
                            <Route
                                path = "/profile"
                                element = { <Profile user={user || {}}/> }
                            />
                            <Route
                                path = "*"
                                element = {<Home boardContent={boardContent || []}/>}
                            />
                            <Route
                                path = "/introduce"
                                element = {<input/>}
                            />
                            <Route
                                path = "/notice"
                                element = {<BoardsView boardContent={boardContent || []} kind="공지사항"/>}
                            />
                            <Route
                                path = "/free"
                                element = {<BoardsView boardContent={boardContent || []} kind="자유게시판"/>}
                            />
                            <Route
                                path = "/argue"
                                element = {<BoardsView boardContent={boardContent || []} kind="토론게시판"/>}
                            />
                            <Route
                                path = "/team"
                                element = {<BoardsView boardContent={boardContent || []} kind="팀원을찾습니다"/>}
                            />
                            <Route
                                path = "/teacher"
                                element = {<BoardsView boardContent={boardContent || []} kind="지도교사를찾습니다" user={user}/>}
                            />
                            <Route
                                path = "/board/:board_id"
                                element = {<BoardViewer boardContent={boardContent || []} user={user}/>}
                            />
                            <Route
                                path = "/write"
                                element = {<Write user={user} url={url}/>}
                            />
                        </Routes>
                    </main>

                </Container>
            </BrowserRouter>
            {/* <div>
                <Login/>
            </div> */}
        </div>
    );
    }
}

export default App2;