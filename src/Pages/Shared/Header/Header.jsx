import React from 'react';
import { Button, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo2 from '../../../../images/logo2.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container className='mt-4 p-2'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Image style={{ height: '60px' }} src={logo2} roundedCircle /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;