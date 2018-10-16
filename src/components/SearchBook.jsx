import React, { Component } from 'react';
import '../App.css';
import ListBook from './ListBook';
import Book from './Book';
import SweetAlert from 'sweetalert-react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

export default class SearchBook extends Component {
  state={
    books: [],
    error: false
  }
  componentDidMount = () =>{
    BooksAPI.getAll()
    this.setState({books:[]})
  }
  handleChange = (e, book) => {

    const bookSearch = this.state.books.map(element => {
      if (element.id === book.id) element.shelf = e.target.value
      return element;
    });
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({ books: bookSearch });
      
    })
  };

  getSearch = query => {
    this.setState({ query: query.trim() }, () => {
      if (this.state.query !== '') this.getBooks();
      else this.setState({ books: [] });
    });
  }; 
  getBooks = () => {
    BooksAPI.search(this.state.query).then(data => {
      if (data) {
        if(data.error){
          alert("Nenhum livro encontrado")
           
          this.setState({error: true, books: []})
        }
        else{
            data = data.map(book => {
              console.log("LIVROS")
      console.log("---------------")
      console.log(book)
              return (
                this.setState({ books: data, error: false })
              )

            })
          }
        
      }

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
            {this.state.books.map(
              book =>(
                <Book 
                  key={book.id}
                  book ={book}
                  onChange={this.handleChange}
                />
              )
            )}
          </ol>
        </div>
      </div>
    );
  }
}
