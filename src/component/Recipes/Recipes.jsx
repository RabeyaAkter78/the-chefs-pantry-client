import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => {
                console.error(error)
            })

    }, [])


    return (
        <div>
            <Container>
                <div>


                    <Card>
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>



                <div className='row row-cols-1 row-cols-md-3 g-4 p-2 mb-4'>


                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                        >
                        </Recipe>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Recipes;