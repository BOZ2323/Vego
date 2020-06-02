import React from 'react'

const RecipeList = ({search, recipes, query}) => {

    const recipeList = recipes.length ? (recipes.filter( recipe => recipe.Vegetable.includes(query)).map( recipe => {
        let uniqueId = Math.random()
                return (
                    <div className="list-item" key={uniqueId}>
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
