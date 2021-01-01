import React from 'react'
import axios from 'axios'

import { FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE } from './shopTypes'

const API_URL = 'https://5fcf88c51f2374001663091f.mockapi.io/shop';
const API_URL2 = 'https://nigerian-food-api.herokuapp.com/recipes';

//store action dispatch reducer  

export const fetchRecipeRequest = () => {
    return {
        type: FETCH_RECIPES_REQUEST
    }
}

export const fetchRecipeSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes,
    }
}

export const fetchRecipeError = (error) => {
    return {
        type: FETCH_RECIPES_FAILURE,
        payload: error,
    }
}

//function for API calls 

export const fetchRecipes = () => {
    return function(dispatch) {
        dispatch(fetchRecipeRequest()) //for loading component
        axios.get(API_URL)
                .then(response => {
                    const recipes = response.data.splice(0,4)
                    dispatch(fetchRecipeSuccess(recipes))
                    console.log(recipes)
                })
                .catch(error => {
                    //error message
                    dispatch(fetchRecipeError(error.message))
                })
    }
}

fetchRecipes();
console.log(fetchRecipes())


/* 
{
                    const recipes = res.data.splice(0,10) //get first 10 results 
                    dispatch(fetchRecipeSuccess(recipes))
                    console.log(recipes)
                }
*/