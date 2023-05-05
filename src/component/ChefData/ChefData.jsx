import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link, useParams } from 'react-router-dom';


const ChefData = ({ chef }) => {
   

    const { id, name, picture, years_of_experience, number_of_recipes, likes, recipe_name, rating } = chef;

    const handleAllRecipe = () => {

    }

    return (

        <div>
            <div className="col">
                <div className="card h-100">
                    <LazyLoad>
                        <img style={{ height: '250px' }} src={picture} className="card-img-top" alt="..." />
                    </LazyLoad>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Years of Experience: {years_of_experience}</h5>
                        <h5 className="card-title">Number Of Recipes: {number_of_recipes}</h5>
                        <h5 className="card-title">Likes: {likes}</h5>

                        {/* <Link to="/recipes"><Button onClick={handleAllRecipe} variant="success">View Recipes</Button></Link> */}
                        <Link to={`/recipes/${id}`}><Button onClick={handleAllRecipe} variant="success">View Recipes</Button></Link>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default ChefData;