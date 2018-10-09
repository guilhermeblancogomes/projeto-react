import React, { Component } from 'react';

import '../App.css';
import { Link } from 'react-router-dom';
import Shelf from './Shelf.jsx';
import capa from '../icons/capa.png';
import * as BooksAPI from './BooksAPI';
export default class ListBook extends Component {
  state = { books: [] };

  componentDidMount = () => {
    this.setState({ books: this.props.books });
  };

  handleChange = (e, book) => {
    const newBooks = this.state.books.map(element => {
      if (element.id === book.id) element.shelf = e.target.value;
      return element;
    });
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({ books: newBooks });
    });
  };
  render() {
    let { books } = this.state;
    const statesShelf = [
      { prop: 'currentlyReading', label: 'Lendo' },
      { prop: 'read', label: 'Lido' },
      { prop: 'wantToRead', label: 'Quero ler' }
    ];
    return (
      <div className="App">
        <div className="list-books-title">
          <img src={capa} width="300" />
        </div>
        {books.length > 0 &&
          statesShelf.map(type => {
            return (
              <Shelf
                key={type.label}
                title={type.label}
                onChange={this.handleChange}
                books={books.filter(book => book.shelf === type.prop)}
              />
            );
          })}

        <div className="open-search">
          <Link to="/search" className="open-search" />
        </div>
      </div>
    );
  }
}
