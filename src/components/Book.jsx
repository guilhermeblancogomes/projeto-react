import React, { Component } from 'react';
import '../App.css';
import './ListBook';
import './Shelf';

export default class Book extends Component {
  render() {
    const valueInputs = {
      currentlyReading: 'Lendo',
      read: 'Lido',
      wantToRead: 'Quero ler',
      none: 'Excluir'
    };

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
                book.imageLinks ? book.imageLinks.thumbnail : 'Sem capa'
              }}`
            }}
          />

          <div className="book-shelf-changer">
            <select
              className="selection-book-shelf"
              value={book.shelf}
              onChange={e => this.props.onChange(e, book)}
            >
              <option value="" disabled>
                Move to...
              </option>
              <option
                className="selection-option-book-shelf"
                value="currentlyReading"
              >
                {valueInputs.currentlyReading}
              </option>
              <option
                className="selection-option-book-shelf"
                value="wantToRead"
              >
                {valueInputs.wantToRead}
              </option>
              <option className="selection-option-book-shelf" value="read">
                {valueInputs.read}
              </option>
              <option className="selection-option-book-shelf" value="none">
                {valueInputs.none}
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <div className="book-authors">{book.publishedDate}</div>
        <div className="book-authors">{book.subtitle}</div>
        <div className="book-authors">
          Language: {''}
          {book.language}
        </div>
      </div>
    );
  }
}
