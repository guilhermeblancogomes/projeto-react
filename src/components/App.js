import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ListBook from './ListBook';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import 'bootstrap/dist/css/bootstrap.min.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <ListBook />} />
        <Route exact path="/search" render={() => <SearchBook />} />
        <div className="open-search">
          <Link to="/search" className="open-search" />
        </div>
      </div>
    );
  }
}

export default BooksApp;
