import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChefData from '../ChefData/ChefData';
import MustTryItems from '../MustTryItems/MustTryItems';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://the-chefs-pantry-server-rabeyaakter78.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => {
                console.error(error)
            })
    }, [])


    return (
        <Container>
            <Carousel className='mt-0'>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://media.istockphoto.com/id/1319620455/photo/indian-fish-curry-with-rice-served-on-banana-leaf.jpg?b=1&s=170667a&w=0&k=20&c=jht8ska7prxL63JzEsaWznAUNNi9lVwEZ3RDkuNNYBg="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fish Curry</h3>
                        <p>Fish Curry is just a Name"Macher Jhol" Is An Bengali Emotion!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?b=1&s=170667a&w=0&k=20&c=1DcZ93vMurs90VV2u6WqDxwSTVBdS18_jgIle04J218="
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Bengali Mejabni</h3>
                        <p> “Food is not rational. Food is culture, habit, craving, and identity.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://media.gettyimages.com/id/1453144349/photo/close-up-of-food-served-on-table-dhaka-bangladesh.jpg?s=612x612&w=0&k=20&c=QTysBsTPsDJ05dXg1ntCmfOkf9MwNzr2stcBQ12d2fU="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Good Food</h3>
                        <p> “Food is the most primitive form of comfort.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* chefs section */}
            <div>
                <h3 className='text-center m-5'>Meet Our Top Chefs</h3>
                <div className='row row-cols-1 row-cols-md-3 g-4 p-2 mb-4'>
                    {
                        chefs.map(chef => <ChefData
                            key={chef.id}
                            chef={chef}
                        >
                        </ChefData>)
                    }
                </div>
            </div>

            <h3 className='text-center fw-bold m-4 px-4'>Must Try Items</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4  mb-4 ms-3' >
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Low-res-Sosrshe-Ilish-8.jpg?fit=1200%2C800&ssl=1" />
                    <Card.Body>
                        <Card.Title>1.Shorshe Ilish (Hilsa Fish with Mustard Curry) </Card.Title>
                        <Button variant="info">Order Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src="https://2.bp.blogspot.com/-IjmGdjYRsyc/WUp3gXjWxjI/AAAAAAAAAAg/dceUL-NX1kAGNy37DcazKPadVqewJtcNwCPcBGAYYCw/s1600/y.jpg" />
                    <Card.Body>
                        <Card.Title>2.Kacchi Biriyani (Mutton Biriyani) </Card.Title>
                        <Button variant="info">Order Now</Button>

                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src="https://www.daily-sun.com/assets/news_images/2019/08/05/Daily_Sun_8.jpg" />
                    <Card.Body>
                        <Card.Title>3.Beef Kala Bhuna (Beef Curry) </Card.Title>
                        <Button variant="info">Order Now</Button>

                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ytimg.com/vi/NcVOz1m9pGQ/maxresdefault.jpg" />
                    <Card.Body>
                        <Card.Title>4.Bhuna Khichuri with Dim Bhaji (Yellow Rice with Omelette)</Card.Title>
                        <Button variant="info">Order Now</Button>

                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src="https://t3.ftcdn.net/jpg/04/51/16/72/360_F_451167283_YXGf3RCAPgFC7tC4cb202R0pifiKtxpS.jpg" />
                    <Card.Body>
                        <Card.Title>5.Haleem (Mixed Lentil Soup and Meat)</Card.Title>
                        <Button variant="info">Order Now</Button>

                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src="https://thumbs.dreamstime.com/b/besan-ladoo-mouth-watering-sweet-treat-asia-34175859.jpg" />
                    <Card.Body>
                        <Card.Title>5. Chomchom (Traditional Sweet / Chum Chum)</Card.Title>
                        <Button variant="info">Order Now</Button>

                    </Card.Body>
                </Card>
            </div>
            <h4 className='text-center fw-bold m-4 px-4'>ABOUT US</h4>
            <div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://media.istockphoto.com/id/1063008974/photo/flying-mixed-vegetables-in-a-pan-diet-healthy-food-black-background-for-copying-text-concept.jpg?s=170667a&w=0&k=20&c=HwGYdaAI7lI6m0tgrZFXBg3SFd_iQqKrySRwpHckf8E=" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Welcome to The Chefs Pantry!
                                <br /> A modern restaurant with a focus on premium food tastes.</h5>
                                <p className="card-text">We invite you to celebrate our restaurant's delicious recipes whether you are here for a business lunch or dinner. Discover new tastes and inspired recipes from all over the world.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Home;