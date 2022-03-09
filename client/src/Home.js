import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Carousel from './Carousel';
import BoardPreview from './BoardPreview'

function Home(props) {


    return (
        <div>
            <Row>
                <Col>
                    <Carousel/>
                </Col>
            </Row>
            <Row xs={3}>
                <Col><BoardPreview boardContent={props.boardContent || []} kind="공지사항"/></Col>
                <Col><BoardPreview boardContent={props.boardContent || []} kind="자유게시판"/></Col>
                <Col><BoardPreview boardContent={props.boardContent || []} kind="토론게시판"/></Col>
            </Row>
        </div>
    );
}

export default Home;