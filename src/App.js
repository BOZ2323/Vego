import React, { useState, useEffect } from 'react';
import './App.css';
// import Form from './Form'
import yummies from './yummies.json'
import Logo from './Logo'
import Menu from './Menu'
import RecipeList from './RecipeList';



// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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
      {/* <Form getRecipes={getRecipes} getSearch={getSearch} updateSearch={updateSearch}/> */}
      <Logo />
      <Menu />
      <RecipeList recipes={recipes} search={search} query={query}/>
      
      
    </div>
  );
}

export default App;
