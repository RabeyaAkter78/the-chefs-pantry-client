import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaThumbsUp } from 'react-icons/fa';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    const [user, setUser] = useState({})
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`https://the-chefs-pantry-server.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => {
                console.log(error.message)
            })
    }, [])
    console.log(user);

    // useloader start:
    const chefsData = useLoaderData();
    // console.log(chefsData)
    // const id = useParams();
    // console.log(id[0])
    const { name, picture, shortBio, likes, number_of_recipes, years_of_experience } = chefsData;

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
                    <Card className='text-center fw-bold fs-3'>
                        <Card.Img variant="top"  src={user.picture} />
                        <Card.Body>
                            <Card.Text>
                                <p>{user.name}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>{user.shortBio}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Number Of Recipes: {user.number_of_recipes}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>years_of_experience: {user.years_of_experience}</p>
                            </Card.Text>
                            <Card.Text>
                                <p><FaThumbsUp></FaThumbsUp> {user.likes}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>



                <div className='row row-cols-1 row-cols-md-3 g-4 p-2 mb-4'>
                    {
                        recipes?.map(recipe => <Recipe
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