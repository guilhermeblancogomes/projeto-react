import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import '../App.css';
import { Link } from 'react-router-dom';
import Shelf from './Shelf.jsx';
export default class ListBook extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  render() {
    let { books } = this.state;
    const statesShelf = [
      { prop: 'read', label: 'Lendo' },
      { prop: 'wantToRead', label: 'Favoritos' },
      { prop: 'currentlyReading', label: 'Quero Ler' }
    ];
    console.log(books);
    return (
      <div className="App">
        {statesShelf.map(type => {
          return (
            <Shelf
              key={type.label}
              title={type.label}
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
