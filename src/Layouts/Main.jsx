import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid="md">
                <Row>
                    <Home></Home>
                    <Col>Main content comimg "carosel"</Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;