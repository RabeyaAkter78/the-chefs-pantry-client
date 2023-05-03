import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';

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
                setSuccess('Login Successfull!')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }

    return (
        <Container className=' w-25 mx-auto'>
            <h3>please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? Please<Link to={'/register'}> Register</Link>
                </Form.Text>

                <Form.Text className="text-success">
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>
            {/* login with google */}
            <Container className='mt-2 mb-2'>
                <Button onClick={handleLogInWithGoogle} className='mb-2' variant="outline-secondary">Login with Google</Button>


                {/* login with git hub */}
                <Button onClick={handleGithubLogin} variant="outline-success">Login with github</Button>
            </Container>
        </Container>

    );
};

export default Login;
