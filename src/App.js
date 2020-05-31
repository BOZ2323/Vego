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
  console.log(data[0].Vegetable, "-- das wird schon!");
  setRecipes(data);
}

const updateSearch = e => {
  setSearch(e.target.value)
  console.log(e.target.value)
  console.log(search)
}



  return (
    <div className="App">
      <form onSubmit={getRecipes} className="search-form">
        <input className="search-bar" type="text" placeholder="vegetable..." onChange={updateSearch}></input>
        <button className="search-button" type="submit">search</button>
      </form> 
      <RecipeList recipes={recipes} />
      <Recipe recipes={recipes} search={search}/>
      
    </div>
  );
}

export default App;
