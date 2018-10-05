import React, { Component } from 'react';
import '../App.css';
import Book from './Book';

export default class Shelf extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
          </div>
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books &&
                  this.props.books.map(book => (
                    <li>
                      <Book key={book.id} book={book} />
                    </li>
                  ))}
                <li />
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
