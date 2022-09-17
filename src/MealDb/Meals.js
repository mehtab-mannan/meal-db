import React from 'react';
import './Meals.css';
const Meals = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    const {handleAddToOrder, meal} = props;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={()=>handleAddToOrder(meal)}> Add</button>
        </div>
    );
};

export default Meals;