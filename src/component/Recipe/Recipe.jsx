import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [favourites, setFavourites] = useState(false)

    const handleFavourite = () => {
        setFavourites(true);
        toast.success('Successfully Add On Your Favourite list!');
    }

    const { name, recipeImg, years_of_experience, number_of_recipes, likes, recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div>
            <div>

                <Card>
                    <Card.Img variant="top" style={{ height: '200px' }} src={recipeImg} />
                    <Card.Body>
                        <Card.Title>{recipe_name}</Card.Title>
                        <Card.Text> <p><span className='fw-bold'>Ingredients:</span></p> {ingredients}</Card.Text>
                        <Card.Text> <p><span className='fw-bold'>Cooking Methods:</span></p> {cooking_method}</Card.Text>
                        <Card.Text> <p className='d-flex justify-content-between align-items-center'>
                            <span className='fw-bold'><FaStar></FaStar> Rating:</span> {rating}

                            <span><Button onClick={handleFavourite} disabled={favourites} variant="success"><FaHeart></FaHeart> Favourite  </Button>
                                <Toaster />
                            </span>
                        </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Recipe;