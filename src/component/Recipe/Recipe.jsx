import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa';

const Recipe = ({ recipe }) => {
    const { name, picture, years_of_experience, number_of_recipes, likes, recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" style={{ height: '200px' }} src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> <p><span className='fw-bold'>Ingredients:</span></p> {ingredients}</Card.Text>
                        <Card.Text> <p><span className='fw-bold'>Cooking Methods:</span></p> {cooking_method}</Card.Text>
                        <Card.Text> <p className='d-flex justify-content-between align-items-center'>
                            <span className='fw-bold'><FaStar></FaStar> Rating:</span> {rating}
                            <span><Button variant="success"><FaHeart></FaHeart> Favourite</Button></span>
                        </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Recipe;