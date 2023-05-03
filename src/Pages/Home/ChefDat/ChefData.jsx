import React from 'react';
import { Button } from 'react-bootstrap';

const ChefData = ({ chef }) => {
    const { name, picture, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <div className="col">
            <div className="card h-100">
                <img style={{ height: '250px' }} src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Years of Experience: {years_of_experience}</h5>
                    <h5 className="card-title">Number Of Recipes: {number_of_recipes}</h5>
                    <h5 className="card-title">Likes: {likes}</h5>
                    <Button variant="success">View Receipes</Button>
                </div>
            </div>
        </div>


    );
};

export default ChefData;