import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <Container className='banner text-white bg-dark mb-4 '>
            <Container className='p-4' >
                <Row>
                    <Col xs={{ order: 'first' }}>
                        <h5>ADDRESS:</h5>
                        <p>The Chefs Pantry</p>
                        <p>Dhaka,Bangladesh</p>
                    </Col>
                    <Col xs >
                        <h5>RESERVATION</h5>
                        <p>012345678901</p>
                        <p>contact@example.com</p>

                    </Col>
                    <Col xs={{ order: 'last ' }}>
                        <h5>OPEN HOURS:</h5>
                        <p>Monday - Friday: 10 AM - 11 PM</p>
                        <p> Saturday - Sunday: 9 AM - 1 PM</p>
                    </Col>
                </Row>
            </Container>
            <div className='d-flex justify-content-center align-items-center gap-2 '>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
            <p className='container text-center'><small><FaCopyright /> All Copyright Reserved By Chefs Pantry</small></p>
        </Container>
    );
};

export default Footer;