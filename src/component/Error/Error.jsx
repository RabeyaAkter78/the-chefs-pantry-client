import React from 'react';
import './Error.css'
import { Card, Container } from 'react-bootstrap';

const Error = () => {
    return (
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img src="https://thumbs.dreamstime.com/b/page-not-found-error-power-out-50850182.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>404</Card.Title>
                    <Card.Text>
                      Page not found
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default Error;