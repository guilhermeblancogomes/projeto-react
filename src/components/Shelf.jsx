import React, { Component } from 'react';
import '../App.css';
import Book from './Book';
import { Alert } from 'reactstrap';
export default class Shelf extends Component {
  render() {
    let notFildBook = (
      <Alert color="danger">Nenhum livro na sua prateleira.</Alert>
    );
    return (
      <div className="App">
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              <span className="">{this.props.sva}</span>
              {this.props.title}
            </h2>
          </div>

          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books &&
                  this.props.books.map(book => (
                    <li key={book.title} className="list-books-grid">
                      <Book book={book} onChange={this.props.onChange} />
                    </li>
                  ))}
                {this.props.books == '' ? <b>{notFildBook}</b> : ''}
                <li />
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
