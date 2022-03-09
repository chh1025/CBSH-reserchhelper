import React,{ Component } from 'react';
import { useEffect, useState} from 'react';

import './Login.css';

import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom";

function Login(props) {

  const [UserLoginData, setUserLoginData] = useState({
    email: '',
    password: ''
  })
  
  const getValue = e => {
    const { name, value } = e.target;
    setUserLoginData({
      ...UserLoginData,
      [name]: value
    })
  };

  return (
    <div className="login">
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <div>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <p>이미지 예정</p>
            </div>
            
              <input type="text" id="login" class="fadeIn second" name="email" placeholder="email" onChange={getValue} autocomplete="off"/>
              <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" onChange={getValue} autocomplete="off"/>
              <button class="fadeIn fourth" onClick={() => props.login(UserLoginData.email,UserLoginData.password)}>로그인</button>

            <div id="formFooter">
              <Link to="/signup" style={{textDecoration:'none', marginLeft:'auto'}}>
                <a class="underlineHover" href="#">회원가입</a>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;