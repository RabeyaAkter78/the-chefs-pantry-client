import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container className='text-white bg-dark p-2 '>
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }}>
                        <h5>Office Address</h5>
                        <p>Uttara,Dhaka,Bangladesh</p>
                    </Col>
                    <Col xs >
                        <h5>Useful Links</h5>
                        <Link style={{ textDecoration: 'none' }} to="/home">Home</Link>
                        <br />
                        <Link style={{ textDecoration: 'none' }} to="/blog">Blogs</Link>
                    </Col>
                    <Col xs={{ order: 'last ' }}>
                        <h5>Follow Us</h5>
                        <div className='d-flex align-items-center gap-2 py-4'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </Col>
                </Row>
            </Container>

            <p className='container text-center mt-4'><small><FaCopyright /> All Copyright Reserved By Chefs Pantry</small></p>
        </Container>
    );
};

export default Footer;