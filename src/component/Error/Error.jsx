import React from 'react';
import './Error.css'
import { Card, Container } from 'react-bootstrap';

const Error = () => {
    return (
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png?fbclid=IwAR1Z_CEqK3j7k9ZElHhdGoVZaosU8Ip3yFe-Rlinn6UUXiFbSR4RGR54NWk" alt="Card image" />
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