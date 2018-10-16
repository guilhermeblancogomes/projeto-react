import React, { Component } from 'react';
import '../App.css';
import { Badge } from 'reactstrap';
import Modal from './Modal';
import capaNaoEncontrada from '../icons/notFildImage2.png';
import iconDescription from '../icons/flip.svg';
export default class Book extends Component {
  render() {
    const valueInputs = {
      currentlyReading: 'Lendo',
      read: 'Lido',
      wantToRead: 'Quero ler',
      none: 'Excluir'
    };
    const handleClick = () => {
      alert(`descrição \n ${book.description}`);
    };
    let { book } = this.props;
    return (
      <div className="book">
        <div className="image-resize-book">
          <img
            src={iconDescription}
            width="20"
            title="Ver detalhes do livro"
            onClick={handleClick}
          />
        </div>
        <br />
        <div className="description-book book-title">
          {book.title ? book.title : 'Sem título'}
        </div>
        <div className="book-top">
          {book.imageLinks ? (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : capaNaoEncontrada
                }}`
              }}
            />
          ) : (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${capaNaoEncontrada})`
              }}
            />
          )}

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
        <div className="description-book book-title">
          {/* {book.title ? book.title : 'Sem título'} */}
        </div>
        <div className="description-book book-authors">
          {book.authors ? book.authors : 'Sem autor'}
        </div>
        <div className="description-book book-subtitle">
          {book.subtitle ? book.subtitle : 'Sem subtitulo do livro'}
        </div>
        <div className="description-book book-language">
          {book.language == 'en' ? (
            <h6>
              <Badge color="secondary">
                Idioma: {''}
                {book.language}
              </Badge>
              <br />
              <Badge color="info">
                Págs: {''}
                {book.pageCount ? book.pageCount : 'Não encontrado'}
              </Badge>
            </h6>
          ) : (
            <h6>
              <Badge color="warning">
                Idioma: {''}
                {book.language}
              </Badge>
              <br />
              <Badge color="info">
                Págs: {''}
                {book.pageCount ? book.pageCount : 'Não encontrado'}
              </Badge>
            </h6>
          )}
        </div>
        <div />
      </div>
    );
  }
}
