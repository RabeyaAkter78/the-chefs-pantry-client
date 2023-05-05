import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    // const chefsData = useLoaderData();
    // console.log(chefsData)
    const [recipes, setRecipes] = useState([]);

    // const { name, picture, shortBio, likes, number_of_recipes, years_of_experience } = chefsData;

    useEffect(() => {
        fetch('https://the-chefs-pantry-server-rabeyaakter78.vercel.app/recipes')
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
                                <p>{}</p>
                                {/* <p>{chefsData.length}</p> */}
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