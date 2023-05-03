import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChefData from '../ChefData/ChefData';
import MustTryItems from '../MustTryItems/MustTryItems';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
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

            <h4 className='text-center m-4 px-4'>Must Try Items in Bangladesh</h4>
            <div className='row row-cols-1 row-cols-md-3 g-4  mb-4 ms-3' >
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Low-res-Sosrshe-Ilish-8.jpg?fit=1200%2C800&ssl=1" />
                    <Card.Body>
                        <Card.Title>1.Shorshe Ilish (Hilsa Fish with Mustard Curry) </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-IjmGdjYRsyc/WUp3gXjWxjI/AAAAAAAAAAg/dceUL-NX1kAGNy37DcazKPadVqewJtcNwCPcBGAYYCw/s1600/y.jpg" />
                    <Card.Body>
                        <Card.Title>2.Kacchi Biriyani (Mutton Biriyani) </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://www.daily-sun.com/assets/news_images/2019/08/05/Daily_Sun_8.jpg" />
                    <Card.Body>
                        <Card.Title>3.Beef Kala Bhuna (Beef Curry) </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://i.ytimg.com/vi/NcVOz1m9pGQ/maxresdefault.jpg" />
                    <Card.Body>
                        <Card.Title>4.Bhuna Khichuri with Dim Bhaji (Yellow Rice with Omelette)</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/04/51/16/72/360_F_451167283_YXGf3RCAPgFC7tC4cb202R0pifiKtxpS.jpg" />
                    <Card.Body>
                        <Card.Title>5.Haleem (Mixed Lentil Soup and Meat)</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/besan-ladoo-mouth-watering-sweet-treat-asia-34175859.jpg" />
                    <Card.Body>
                        <Card.Title>5. Chomchom (Traditional Sweet / Chum Chum)</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <h4 className='text-center m-4 px-4'>Bangladeshi cuisine</h4>
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://media.istockphoto.com/id/1218838404/photo/traditional-bengali-food-to-celebrate-bengali-new-year.jpg?s=170667a&w=0&k=20&c=snZF35LDAfrFim4KyPvtb26KRwo3F2IrO9tltNSvZZI=" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Text className='fs-5 p-3'>
                            Mughlai, Central Asian, Armenian, Hindustani and native Bengali cuisines. The city's cuisine also has unique local dishes.

                            The Nawabs of Dhaka brought Mughlai cuisine to Bengal. Mughlai cuisine is often lavish and expensive, and was out of reach for many people up for many centuries, becoming more widespread as Bangladesh's economy grew. It is characterised by use of meat and dairy ingredients such as lamb, mutton, beef and yoghurt together with mild spices. Its dishes include kebab; stuffed breads; kacchi biriyani; roast lamb, duck, and chicken; patisapta; Kashmiri tea and korma are still served at special occasions like Eid and at weddings.
                            Chowk Bazaar in Old Dhaka is a centuries old market for foodstuffs and ingredients and a focal point during Ramadan for the Iftar meal after sunset. [13][14][15]

                            Dhakaiya paratha is a multi-layered bread that found popularity in Kolkata when immigrants from Dhaka introduced it there following the Partition of India.[16]


                            Haji Biriyani
                            Haji biryani is a rice dish originating from a Dhaka restaurant of the same name. The dish consists of rice, goat meat and spices.[17][18][19][20][21]

                            Bakarkhani is a thick, spiced flat-bread from Mughlai cuisine often served with tea. Dhakai Bakarkhani is the variant found in Dhaka, where it has been prepared for centuries.[22][23]

                            Morog pulao is a signature dish of the city, an aromatic rice pilaf with chicken.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

        </Container>
    );
};

export default Home;