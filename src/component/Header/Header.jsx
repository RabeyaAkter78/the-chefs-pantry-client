import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../Providers/Authprovider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error)
            })
    }


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
                            {user && <Image src={user.photoURL} roundedCircle />}

                            {user ?
                                <Button onClick={handleLogout} variant='secondary'>LogOut</Button>
                                :
                                <Link to='/login'><Button variant='secondary'>Login</Button></Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;