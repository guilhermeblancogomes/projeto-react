import React, { Component } from 'react';
import '../App.css';
import './ListBook';
import { Link } from 'react-router-dom';

export default class SearchBook extends Component {
  state = {};

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Pesquise por Título ou Autor" />
          </div>
        </div>
        <div className="search-books-results">
          <ol cl assName="books-grid" />
        </div>
      </div>
    );
  }
}
