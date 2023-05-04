import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container className='mt-4  align-items-center'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='container hb'>
                <Container>
                    <Navbar.Brand href="#home"><Image style={{ height: '60px' }} src={logo} roundedCircle /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto  fw-bold">
                            <Link className='text-decoration-none me-4 text-white fs-5' to="/">Home</Link>
                            <Link className='text-decoration-none me-4 text-white fs-5' to="/blogs">Blogs</Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Link className='text-decoration-none me-4 text-white fs-5 fw-bold' to="/login">Login</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;