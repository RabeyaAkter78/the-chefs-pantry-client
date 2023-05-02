import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://media.istockphoto.com/id/1319620455/photo/indian-fish-curry-with-rice-served-on-banana-leaf.jpg?b=1&s=170667a&w=0&k=20&c=jht8ska7prxL63JzEsaWznAUNNi9lVwEZ3RDkuNNYBg="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?b=1&s=170667a&w=0&k=20&c=1DcZ93vMurs90VV2u6WqDxwSTVBdS18_jgIle04J218="
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://media.gettyimages.com/id/1453144349/photo/close-up-of-food-served-on-table-dhaka-bangladesh.jpg?s=612x612&w=0&k=20&c=QTysBsTPsDJ05dXg1ntCmfOkf9MwNzr2stcBQ12d2fU="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;