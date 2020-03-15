//Necessary dependencies and components
import React from 'react'
import './App.css'
import News from './News'
import SearchNews from './SearchNews'

//Basic app layout
export default () => (
  <div>
    <SearchNews />
    <News/>
    <footer>Copyright 2020</footer>
  </div>
);