import React, { Component } from 'react';
import '../App.css';
import './ListBook';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

export default class SearchBook extends Component {
  getSearch = query => {
    this.setState({ query: query.trim() }, () => {
      if (this.state.query !== '') this.getBooks();
      else this.setState({ books: [] });
    });
  };
  getBooks() {
    BooksAPI.search(this.setState.query).then(data => {
      this.setState({ books: [] });
    });
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="O que você procura?"
              onChange={event => this.getSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}
