import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './login.css'

const auth = getAuth(app)
const Login = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // login with google:
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    // login with github:
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    // login with email & password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        if (/((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*[\\d~!@#$%^&*\\(\\)_+\\{\\}\\[\\]\\?<>|_]).{6,50})/.test(password)) {
            setError('incorrect password');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setError('');
                form.reset();
                setSuccess('Successfully Login !')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }

    return (
        <div className='container text-white'>

            <div className='lb'>
            <h3 className='text-center'><u>Please Login</u></h3>
            <Form className=' w-25 mx-auto' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                <br />
                <Form.Text className="text-success">
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
                <Form.Text className="text-secondary text-center">
                    Don't Have an Account? Please<Link className='text-decoration-none' to={'/register'}> Register</Link>
                </Form.Text>
            </Form>
            {/* login with google */}
            <hr className='w-50 mx-auto mt-3' />
            <h6 className='text-center mt-3 mb-2'>Login With</h6>
            <Container className='d-flex justify-content-center align-items-center gap-3 mb-3 '>
                <Button className='mb-3' onClick={handleLogInWithGoogle} variant="outline-secondary"><FaGoogle /> Login with Google</Button>


                {/* login with git hub */}
                <Button className='mb-3' onClick={handleGithubLogin} variant="outline-success"> <FaGithub />Login with github</Button>
            </Container>

            </div>

            
        </div>

    );
};

export default Login;
