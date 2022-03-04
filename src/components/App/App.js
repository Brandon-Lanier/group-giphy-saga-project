import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import FavGallery from '../FavGallery/FavGallery';
import './App.css'

function App() {
  return (
    <Router>
    <div>
     
      <h1>Giphy Search!</h1>
      <Route path="/" exact>
        <SearchForm />
        <div className="gallery">
         <ImageGallery />
        </div>
      </Route>
      <Route path="/favs">
        <FavGallery />
      </Route>
    </div>
    </Router>
  );
}

export default App;
