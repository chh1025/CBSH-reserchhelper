import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function nonPermission(props) {

    const [UserLoginData, setUserLoginData] = useState({
        email: '',
        password: '',
        name:'',
        belong:'student',
        img:'',
        introduce:'',
        website:'',
        github:'',
        twitter:'',
        instagram:'',
        facebook:'',
        kakaotalk:'',
        phone:'',
    })
  
    const getValue = e => {
        const { name, value } = e.target;
        setUserLoginData({
        ...UserLoginData,
        [name]: value
        })
        console.log(UserLoginData)
    };

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

  return (
    <div className="login">
        <div className="fadeInDown" style={AppStl}>
            <Container style={ConSty}>
                <Row style={{float: "center"}}>
                    <Col>
                        <>
                            <br/>
                            <h5>
                                이름<span style={{color:'red'}}> *</span>
                            </h5>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="이름"
                                    aria-label="이름"
                                    name="name"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                            </InputGroup>
                            <h5>
                                이메일<span style={{color:'red'}}> *</span>
                            </h5>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="이메일"
                                    aria-label="이메일"
                                    name="email"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                            </InputGroup>
                            <h5>
                                비밀번호<span style={{color:'red'}}> *</span>
                            </h5>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="비밀번호"
                                    aria-label="비밀번호"
                                    name="password"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                            </InputGroup>
                            <h5>
                                소속<span style={{color:'red'}}> *</span>
                            </h5>
                            <InputGroup className="mb-3">
                                <select name="belong" onChange={getValue} style={{textAlign:'center', width:'10.5vw'}}>
                                <option value="student">student</option>
                                <option value="teacher">teacher</option>
                                </select>
                            </InputGroup>
                            <h5>
                                기수<span style={{color:'red'}}> *</span>
                            </h5>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="기수"
                                    aria-label="이름"
                                    name="ordinal"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                            </InputGroup>
                            <h5>
                                소개
                            </h5>
                            <InputGroup>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>

                            <h5>
                                웹사이트
                            </h5>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                https://
                                </InputGroup.Text>
                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                            <h5>
                                SNS
                            </h5>
                            <InputGroup>
                                <FormControl
                                    placeholder="Github"
                                    aria-label="이름"
                                    name="github"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                                <FormControl
                                    placeholder="Twitter"
                                    aria-label="이름"
                                    name="twitter"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                                <FormControl
                                    placeholder="Instagram"
                                    aria-label="이름"
                                    name="instagram"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                                <FormControl
                                    placeholder="Facebook"
                                    aria-label="이름"
                                    name="facebook"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                                <FormControl
                                    placeholder="Kakaotalk"
                                    aria-label="이름"
                                    name="kakaotalk"
                                    aria-describedby="basic-addon1"
                                    onChange={getValue}
                                />
                            </InputGroup>
                            
                        </>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default nonPermission;