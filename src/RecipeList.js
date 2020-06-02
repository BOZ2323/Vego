import React from 'react'

const RecipeList = ({search, recipes}) => {

    const recipeList = recipes.length ? (recipes.filter( recipe => recipe.Vegetable.includes(search)).map( recipe => {
           
                return (
                    <div className="list-item" key="recipe.id">
                    <h1>{recipe.Vegetable}</h1>
                    <img src="https://source.unsplash.com/random" alt="random pic"/>
                </div>
                )
            } 
        )) : null
    return(
        <div className="recipe-collection">
            <h1>{ recipeList }</h1>
        </div>
    )
    
    };

export default RecipeList;
