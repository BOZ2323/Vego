import React, { useState, useEffect } from 'react';
import './App.css';
import yummies from './yummies.json'
import RecipeList from './RecipeList'


function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState([])
  const [query, setQuery] = useState([])
  
useEffect(()=>{
  getRecipes();
}, [query])


const getRecipes = async () => {
  const data = await yummies;
  setRecipes(data);
}

const updateSearch = async (e) => {
  await setSearch(e.target.value)
}

const getSearch = async (e) =>{
  e.preventDefault();
  await setQuery(search);
}

  return (
    <div className="App">
      <form onSubmit={getRecipes && getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="vegetable..." onChange={updateSearch}></input>
        <button onSubmit={getSearch} className="search-button" type="submit">search</button>
      </form> 
      <RecipeList recipes={recipes} search={search} query={query}/>
    </div>
  );
}

export default App;
