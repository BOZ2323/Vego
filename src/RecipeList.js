import React from 'react'

const RecipeList = ({recipes}) => {

    // let VegetableList = recipes.Vegetable.filter( recipe => {
    //       return id !== exercise.id
    //   })
        
      

    const recipeList = recipes.length ? (recipes.map( recipe => {
           
                return (
                    <div className="list-item" key="recipe.id">
                    <h1>{recipe.Vegetable}</h1>
                    <img src="https://source.unsplash.com/random" alt="random pic"/>
                </div>
                )
            }

            //hier weiterarbeiten, filter() nutzen, um zuerst recipes zu filtern und dann diese Liste zu mappen!
         
            
        
        
        )) : null
    return(
        <div className="recipe-collection">
            <h1>{ recipeList }</h1>
        </div>
    )
    
    };

export default RecipeList;
