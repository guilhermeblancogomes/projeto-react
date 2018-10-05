import React, { Component } from 'react';
import '../App.css';
import './ListBook';
import './Shelf';

export default class Book extends Component {
  render() {
    let { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : ''
              }}`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        {/* <div className="book-authors">{book.publishedDate}</div> */}
        {/* <div className="book-authors">{book.subtitle}</div> */}
        <div className="book-authors">
          Language: {''}
          {book.language}
        </div>
      </div>
    );
  }
}