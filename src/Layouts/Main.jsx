import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid="md">
                <Row>
                    <Col>Main content comimg "carosel"</Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;