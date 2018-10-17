import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Shelf from './Shelf.jsx';
import capa from '../icons/capa.png';
import * as BooksAPI from './BooksAPI';
import icoOpenBook from '../icons/open-book.svg';
import icoTaskComplete from '../icons/task-complete.svg';
import icoBookClose from '../icons/book-close.svg';
import Loading from '../components/Loading';

export default class ListBook extends Component {
  state = { books: [], loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books, loading: false });
      })
      .catch(e => {
        this.setState({ loading: false });
      });
  }

  handleChange = (e, book) => {
    const bookSearch = this.state.books.map(element => {
      if (element.id === book.id) element.shelf = e.target.value;
      return element;
    });
    this.setState({ loading: true });
    BooksAPI.update(book, e.target.value)
      .then(response => {
        this.setState({ books: bookSearch, loading: false });
      })
      .catch(e => {
        this.setState({ loading: false });
      });
  };
  render() {
    let { books } = this.state;
    const statesShelf = [
      {
        prop: 'currentlyReading',
        label: 'Lendo',
        sva: `${icoOpenBook}`
      },
      { prop: 'read', label: 'Lido', sva: `${icoBookClose}` },
      { prop: 'wantToRead', label: 'Quero ler', sva: `${icoTaskComplete}` }
    ];
    return (
      <div className="App">
        {this.state.loading && <Loading />}
        <div className="list-books-title">
          <img src={capa} width="300" />
        </div>
        <br />

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
