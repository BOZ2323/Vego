import React, { useState, useEffect } from 'react';
import './App.css';
import recipes from './recipes.json'

function App() {

useEffect(()=>{
  getRecipes();
})


const getRecipes = async () => {
  const data = await recipes;
  console.log(data);
}


  return (
    <div className="App">
      <form onSubmit={getRecipes} className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">search</button>
      </form> 
    </div>
  );
}

export default App;
