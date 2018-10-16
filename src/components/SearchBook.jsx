import React, { Component } from 'react';
import '../App.css';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

export default class SearchBook extends Component {
  state = {
    books: [],
    error: false,
    bookshelf: []
  };
  componentDidMount = () => {
    this.setState({ books: [] });
  };
  handleChange = (e, book) => {
    const bookSearch = this.state.books.map(element => {
      if (element.id === book.id) element.shelf = e.target.value;
      return element;
    });
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({ books: bookSearch });
    });
  };

  getSearch = query => {
    this.setState({ query: query.trim() }, () => {
      if (this.state.query !== '') this.getBooks();
      else this.setState({ books: [] });
    });
  };
  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ bookshelf: books }, () => {
        BooksAPI.search(this.state.query).then(data => {
          if (data) {
            if (data.error) {
              alert('Nenhum livro encontrado');
            } else {
              data = data.map(book => {
                book.shelf = 'none';
                const auxFilter = this.state.bookshelf.filter(
                  b => b.id === book.id
                );
                if (auxFilter.length > 0) {
                  book.shelf = auxFilter[0].shelf;
                }
                return book;
              });
              this.setState({
                books: data
              });
              console.log('aqui', books);
            }
          }
        });
      });
    });
  };

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
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book key={book.id} book={book} onChange={this.handleChange} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
