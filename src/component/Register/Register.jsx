import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError(' Password should be at least 6 characters');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserData(name, photo)
                    .then(() => {
                    })
                    .catch(err => console.log(err.message));

            })
            .catch(err => setError(err?.message))

        // createUserWithEmailAndPassword(auth, email, password)
        // createUser(email, password)
        //     .then(result => {
        //         // const createdUser = result.user;
        //         // console.log(createdUser);
        //         // setError('');
        //         updateUserData(name, photo)
        //             .then(result => {

        //             })
        //             .catch(error => {
        //                 // console.log(error)
        //             })
        //         // form.reset();
        //         // setSuccess('user has been created successfully!');

        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //         setError(error.message);
        //     })
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }


    return (
        <Container className=' w-25 mx-auto m-5 p-3'>
            <h3><u> Register</u></h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />

                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">Register</Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? Please <Link className='text-decoration-none' to={'/login'}> Login</Link>
                </Form.Text>

                <Form.Text className="text-success">
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};
export default Register;