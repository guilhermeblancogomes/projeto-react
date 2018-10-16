import React, { Component } from 'react';
import '../App.css';
import ListBook from './ListBook';
import Shelf from './Shelf';
import { Button,Badge } from 'reactstrap';
import capaNaoEncontrada from '../icons/notFildImage2.png';
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
        {
          book.imageLinks ?
        
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : capaNaoEncontrada
              }}`
             
            }}
          /> :
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${capaNaoEncontrada})`
             
            }}
          />

        }

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
          {book.title ? book.title : 'Sem título'}
        </div>
        <div className="description-book book-authors">
          {book.authors ? book.authors : 'Sem autor'}
        </div>
        <div className="description-book book-subtitle">
          {book.subtitle  ? book.subtitle : 'Sem subtitulo do livro'}
        </div>
        <div className="description-book book-language">
          {book.language == 'en' ? 
            <h6>
              <Badge color="secondary"> 
                Idioma: {''}
                {book.language}
              </Badge>
            </h6> : 
            <h6>
              <Badge color="warning"> 
                Idioma: {''}
                {book.language}

              </Badge>
            </h6>
          }
          <div className="book-button-read" >
                <Button color="info" size="sm" target="_blank" block href={`${book.infoLink}`}> Ver  </Button>
              </div>
        </div>

        
      </div>
    );
  }
}
