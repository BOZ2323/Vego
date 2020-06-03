import React from 'react'
import styles from './RecipeList.module.css'

const RecipeList = ({search, recipes, query}) => {

    const recipeList = recipes.length ? (recipes.filter( recipe => recipe.Vegetable.includes(query)).map( recipe => {
        let uniqueId = Math.random()
                return (
                    <div className={styles.card} key={uniqueId}>
                        <h1>{recipe.Vegetable}</h1>
                        <img className={styles.foto} src="https://source.unsplash.com/random" alt="random pic"/>
                    </div>
                )
            } 
        )) : null
    return(
        <div className={styles.cards}>
            <h1>{ recipeList }</h1>
        </div>
    )
    };

export default RecipeList;
