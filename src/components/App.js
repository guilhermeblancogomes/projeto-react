import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ListBook from './ListBook';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';
import capa from '../icons/capa.png';
class BooksApp extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="list-books-title">
          <img src={capa} width="300" />
        </div>
        <Route exact path="/" render={() => <ListBook />} />
        <Route exact path="/search" render={() => <SearchBook />} />
        <div className="open-search">
          <Link to="/search" className="open-search" />
        </div>
      </div>
    );
  }
}

export default BooksApp;
