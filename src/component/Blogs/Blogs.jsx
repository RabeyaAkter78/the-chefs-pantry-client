import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
const Blogs = () => {
    return (
        <div>
            <Container className='mt-2 mb-2'>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://t3.ftcdn.net/jpg/02/81/50/18/360_F_281501867_XI5OBa4UuGVxMbv5gNLCcCkPDjsX6r0U.jpg" alt="Card image" />
                    <Card.ImgOverlay>

                        <Card.Header> <li><strong>Tell us the differences between uncontrolled and controlled components.</strong> </li> </Card.Header>
                        <Card.Text>
                            <p>
                                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                            </p>
                        </Card.Text>
                        <Card.Header><li> <strong>How to validate React props using PropTypes</strong> </li> </Card.Header>
                        <Card.Text>
                            <p>
                                propTypes is used for props validation in react component.
                                <ul><strong> React PropTypes validators are:</strong></ul>
                                <li>PropTypes.any : The prop can be of any data type.</li>
                                <li>PropTypes.bool : The prop should be a Boolean.</li>
                                <li>PropTypes.number : The prop should be a number.</li>
                                <li>PropTypes.string : The prop should be a string.</li>
                                <li>PropTypes.func : The prop should be a function.</li>
                                <li>PropTypes.array : The prop should be an array.</li>
                            </p>
                        </Card.Text>
                        <Card.Header> <li> <strong>Tell us the difference between nodejs and express js.</strong> </li> </Card.Header>
                        <Card.Text>
                            <p>
                                Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                            </p>
                        </Card.Text>
                        <Card.Header> <li> <strong>What is a custom hook, and why will you create a custom hook?</strong> </li> </Card.Header>
                        <Card.Text>
                            <p>
                                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                            </p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </div>
    );
};

export default Blogs;