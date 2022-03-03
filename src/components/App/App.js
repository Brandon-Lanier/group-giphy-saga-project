import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchForm from '../SearchForm/SearchForm';


function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
      <ImageGallery />
    </div>
  );
}

export default App;
