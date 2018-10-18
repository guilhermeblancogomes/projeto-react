import React, { Component } from 'react';
import '../App.css';
import Book from './Book';
import { Jumbotron } from 'reactstrap';
import bookNotFind from '../icons/pensive.svg';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Loading from '../components/Loading';

export default class SearchBook extends Component {
  state = {
    books: [],
    error: false,
    bookshelf: [],
    loading: false
  };
  componentDidMount = () => {
    this.setState({ books: [], loading: false });
  };
  handleChange = (e, book) => {
    const bookSearch = this.state.books.map(element => {
      if (element.id === book.id) element.shelf = e.target.value;
      return element;
    });
    this.setState({ loading: true });
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({ books: bookSearch, loading: false });
    }).catch(e =>{
      this.setState({ loading: false });
    });
  };

  getSearch = query => {
    this.setState({ query: query.trim() }, () => {
      if (this.state.query !== '') this.getBooks();
      else this.setState({ books: [] ,loading: false });
    });
  };
  getBooks = () => {
    this.setState({ loading: true });
    BooksAPI.getAll().then(books => {
      this.setState({ bookshelf: books, loading:false }, () => {
        BooksAPI.search(this.state.query).then(data => {
          if (data) {            
            if (data.error) {
              this.setState({
                error: true
              })
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
                books: data,
                loading: false
              });
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
              autoFocus
            />
          </div>
        </div>
        {this.state.loading && <Loading />}
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book key={book.id} book={book} onChange={this.handleChange} />
            ))}
          </ol>
        </div>
              
        {this.state.error ? 
        
        <div className="mgs-error">            
            <Jumbotron>
                <span>
                  <img src={bookNotFind} width="50" /> 
                  
                </span>
                <br />
                <span className="txt-mgs-error">Desculpe, mas não encontramos este livro.</span>
            </Jumbotron>
        </div> : ''
        }    
      </div>
    );
  }
}
