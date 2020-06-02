import React, { useState, useEffect } from 'react';
import './App.css';
import yummies from './yummies.json'
import RecipeList from './RecipeList'
import Recipe from './Recipe'

function App() {

useEffect(()=>{
  getRecipes();
})

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState([])

const getRecipes = async () => {
  const data = await yummies;
  setRecipes(data);
}

const updateSearch = async (e) => {
  await setSearch(e.target.value)
}

  return (
    <div className="App">
      <form onSubmit={getRecipes} className="search-form">
        <input className="search-bar" type="text" placeholder="vegetable..." onChange={updateSearch}></input>
        <button className="search-button" type="submit">search</button>
      </form> 
      <RecipeList recipes={recipes} search={search}/>
      <Recipe recipes={recipes} search={search}/>
    </div>
  );
}

export default App;
