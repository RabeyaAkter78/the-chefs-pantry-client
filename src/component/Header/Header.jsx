import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../Providers/Authprovider';
import ActiveLink from '../ActiveLink/ActiveLink';

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
                    <Navbar.Brand className='d-flex justify-content-center align-items-center gap-2' href="#home">
                        <Image style={{ height: '60px' }} src={logo} roundedCircle />
                        <p className='fs-3 fst-italic fw-bold'>The Chefs Pantry</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto  fw-bold">


                            <NavLink className='text-decoration-none  me-4 text-white fs-5' to="/">Home</NavLink>


                            <NavLink className='text-decoration-none me-4 text-white fs-5' to="/blogs">Blogs</NavLink>


                        </Nav>
                        <Nav>
                            {/* <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                                Tooltip on top
                            </button> */}

                            {user && 
                            <Image  style={{ height: '50px' }} src={user.photoURL} roundedCircle />
                            
                            }
                            
                            {user ?
                                <Button className='ms-3' onClick={handleLogout} variant='secondary'>LogOut</Button>
                                :
                                <NavLink to='/login'><Button variant='secondary'>Login</Button></NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;