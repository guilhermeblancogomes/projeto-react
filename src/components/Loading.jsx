import React, { Component } from 'react';
import ReactLoading from 'react-loading';

export default class Loading extends Component {
  render() {
    return (
      <div className="ctn-loading">
        <ReactLoading
          type={'spin'}
          color={'#1ac'}
          height={100}
          width={100}
          className="cpn-loading"
        />
        <p className="txt-loading">Carregando...</p>
      </div>
    );
  }
}
