import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefData = ({ chef }) => {
    const { name, picture, years_of_experience, number_of_recipes, likes } = chef;

const handleAllRecipe=()=>{

}

    return (
        <div className="col">
            <div className="card h-100">
                <img style={{ height: '250px' }} src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Years of Experience: {years_of_experience}</h5>
                    <h5 className="card-title">Number Of Recipes: {number_of_recipes}</h5>
                    <h5 className="card-title">Likes: {likes}</h5>
                    <Link to="/recipes"><Button onClick={handleAllRecipe} variant="success">View Receipes</Button></Link>
                </div>
            </div>
        </div>


    );
};

export default ChefData;