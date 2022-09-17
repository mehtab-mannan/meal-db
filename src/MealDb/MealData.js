import React, { useEffect, useState } from 'react';
import Meals from './Meals';
import './Meals.css'


const MealData = () => {
    const [searchText, setSearchText] = useState('');

    const [meals, setMeals] = useState([]);

    useEffect(()=> {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data =>setMeals(data.meals))
    },[searchText])

    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2 className='title'>meal data</h2>
            <input className='search' onChange={searchFood} type="text" name='' id='' /><br />
            <h3>{meals.strMeal}</h3>
            <div className='meals-container container'>
                {
                    meals.map(meal =>
                        <Meals key={meal.idMeal} meal={meal}></Meals>
                        )
                }
            </div>
        </div>
    );
};

export default MealData;