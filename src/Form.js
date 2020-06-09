import React from 'react'

const Form = ({getRecipes, getSearch, updateSearch}) => {
    return (
        <div>
            <form onSubmit={getRecipes && getSearch} className="search-form">
                <input className="search-bar" type="text" placeholder="vegetable..." onChange={updateSearch}></input>
                <button onSubmit={getSearch} className="search-button" type="submit">search</button>
            </form> 
        </div>
    )
}

export default Form;