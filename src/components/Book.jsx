import React, { Component } from 'react';
import '../App.css';
import { Button, Badge, Row, Col, Alert } from 'reactstrap';
import capaNaoEncontrada from '../icons/notFildImage2.png';
import iconDescription from '../icons/flip.svg';

export default class Book extends Component {
  state = {
    flip: false,
    classBook: 'book',
    classFlip: 'book-flip'
  };
  render() {
    const valueInputs = {
      currentlyReading: 'Lendo',
      read: 'Lido',
      wantToRead: 'Quero ler',
      none: 'Excluir'
    };
    const handleClick = () => {
      this.setState({
        flip: true
      });
    };
    let { book } = this.props;
    return !this.state.flip ? (
      <div className="book">
        <div className="image-resize-book">
        
        {book.shelf == "read" ? 
          <Alert color="success"> Lido </Alert>: ''
        }
        {book.shelf == "currentlyReading" ? 
          <Alert color="warning"> Lendo </Alert>: ''
        }
        {book.shelf == "wantToRead" ? 
          <Alert color="info"> Querendo ler </Alert>: ''
        }
        {book.shelf == "none" ? 
          <Alert color="secondary"> Disponivel </Alert>: ''
        }
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
                Mover para...
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
        
      </div>
    ) : (
      <div className="book-flip">
        <div className="image-resize-book">
          <img
            src={iconDescription}
            width="20"
            title="Ver detalhes do livro"
            onClick={
              (this.handleClick = () => {
                this.setState({
                  flip: false
                });
              })
            }
          />
        </div>
        <div className="flip-description">
          <p>
            <strong>Descrição:</strong>
          </p>
        </div>
        <br />
        <div className="text-description">
          {book.description ? (
            book.description
          ) : (
            <Alert color="danger">Sem descrição do livro.</Alert>
          )}
        </div>
        <br />

        <Row>
          <Col xs="6">
            <div className="flip-description">
              <p>
                <strong>Publicação:</strong>
              </p>
            </div>
            <div className="text-description">
              {book.publishedDate
                ? book.publishedDate
                : 'Sem data de lançamento do livro'}
            </div>
          </Col>
          <Col xs="6">
            <div className="flip-description">
              <p>
                <strong>Categoria:</strong>
              </p>
            </div>
            <div className="text-description">
              {book.categories
                ? book.categories
                : 'Sem categoria do livro'}
            </div>
          </Col>
        </Row>
        <br />
        <Button color="success" target="_blank" block href={book.previewLink ? book.previewLink : 
        alert("Ops...Ocorreu um problema no redirecionamento")
        }>
          Ver
        </Button>
       
       

      </div>
    );
  }
}
