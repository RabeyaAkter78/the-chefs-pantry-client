import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChefData from '../ChefDat/ChefData';

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
                            {/* <Link to="/recipes"><Recipes></Recipes></Link> */}
                        </ChefData>)
                    }
                </div>
            </div>


        </Container>
    );
};

export default Home;